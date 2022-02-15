import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Category } from "./category.entity";
import { ArticleFeature } from "./article-feature.entity";
import { ArticlePrice } from "./article-price.entity";
import { CartArticle } from "./cart-article.entity";
import { Photo } from "./photo.entity";

@Index("FK_article_category", ["categoryId"], {})
@Entity("article")
export class Article {
  @Column("int", {
    primary: true,
    name: "article_id",
    unsigned: true,
    default: () => "'0'",
  })
  articleId: number;

  @Column("varchar", { length: 128, default: () => "'0'" })
  name: string;

  @Column("int", { name: "category_id", unsigned: true, })
  categoryId: number;

  @Column("varchar", { length: 255, })
  excerpt: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("enum", {
    name: "status",
    enum: ["available", "visible", "hidden"],
    
  })
  status: "available" | "visible" | "hidden";

  @Column("tinyint", {
    name: "is_promoted",
    unsigned: true
  })
  isPromoted: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @ManyToOne(() => Category, (category) => category.articles, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: Category;

  @OneToMany(() => ArticleFeature, (articleFeature) => articleFeature.article)
  articleFeatures: ArticleFeature[];

  @OneToMany(() => ArticlePrice, (articlePrice) => articlePrice.article)
  articlePrices: ArticlePrice[];

  @OneToMany(() => CartArticle, (cartArticle) => cartArticle.article)
  cartArticles: CartArticle[];

  @OneToMany(() => Photo, (photo) => photo.article)
  photos: Photo[];
}
