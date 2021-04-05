import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid", { name: "user_id" })
  id!: string;

  @Column({ name: "first_name" })
  firstName: string;

  @Column({ name: "last_name" })
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
