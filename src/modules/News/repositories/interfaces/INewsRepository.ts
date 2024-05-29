import { News } from "../../models/News";

interface INewsRepository {
  findById(id: number): News | undefined;
  findAll(): News[];
}

export { INewsRepository };
