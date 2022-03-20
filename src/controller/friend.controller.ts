import express from "express";
import User from "../model/user.model";
import Friend from "../model/friend.model";
const router = express.Router();

router.post("/", async (req, res) => {
    const { userId, phone } = req.body;
    if (!userId || !phone) {
        return res.status(400).json({
            messeage: "올바른 요청이 아닙니다"
        });
    }
    const user: User | null = await User.findByPk(userId);
    if (!user) {
        return res.status(400).json({
            messeage: "잘못된 사용자 요청",
        });
    }
    const friend: User | null = await User.findOne({
        where: {
            phone
        }
    });
    if (!friend) {
        return res.status(400).json({
            messeage: "잘못된 전화번호 요청",
        });
    }
    await Friend.create({
        userId: user.id,
        friendId: friend.id,
    });
    return res.status(201).json();
});
router.get("/:userId", async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json();
    }
    const userIdNumber = parseInt(userId, 10);
    const user: User | null = await User.findByPk(userIdNumber);
    if (!user) {
        return res.status(404).json();
    }

    const friends = await user.$get("myFriends",
        {
            include: [
                {
                    model: User,
                },
            ],
        },
    );

    const friendList = friends.map((friend) => {
        return friend.getDataValue("friendUser");
    })
    return res.status(200).json(friendList);
});
router.get("/search/:phone", async (req, res) => {
    const { phone } = req.params;

    if (!phone) {
        return res.status(400).json();
    }
    const user: User | null = await User.findOne({
        where: {
            phone,
        },
    });
    if (!user) {
        return res.status(404).json();
    }
    return res.status(200).json(user);
});
export default router;
