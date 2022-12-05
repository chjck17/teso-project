import { Category } from 'src/category/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductDetail } from './productdetail.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToMany(() => Category, (categories: Category) => categories.product)
  public categories: Category[];
  @OneToOne(() => ProductDetail, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public detail: ProductDetail;
}
