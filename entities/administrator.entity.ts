import { Column, Entity, Index } from "typeorm";

@Index("uq_administrator_username", ["username"], { unique: true })
@Entity("administrator")
export class Administrator {
  @Column("int", {
    primary: true,
    name: "administrator_id",
  })
  administratorId: number;

  @Column({
    type: "varchar",
    unique: true,
    length: 32,
  })
  username: string;

  @Column({
    type: "varchar",
    name: "password_hash",
    length: 128,
  })
  passwordHash: string;
}
