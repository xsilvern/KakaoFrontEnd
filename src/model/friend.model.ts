import User from './user.model';
import {
    AllowNull,
    AutoIncrement,
    BelongsTo,
    BelongsToMany,
    Column,
    DataType,
    ForeignKey,
    Model,
    PrimaryKey,
    Table,

} from "sequelize-typescript";
@Table
export default class Friend extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: bigint;

    @ForeignKey(() => User)
    userId: bigint;
    @ForeignKey(() => User)
    friendId: bigint;

    @BelongsTo(() => User, "friendId")
    friendUser: User;

}
