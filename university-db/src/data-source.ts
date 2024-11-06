import { DataSource } from 'typeorm';
import { Specialization } from './entities/specialization.entity'; // Adjust path as needed
import { Departments } from './entities/departments.entity'; // Include other entities as necessary
import { Students } from './entities/students.entity'; // Include other entities as necessary

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'samim',
  database: 'Universities',
  entities: [Specialization, Departments, Students], // List all entities here
  migrations: ['./src/migrations/*.ts'], // Path to your migrations
});
