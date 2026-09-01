import products from "@/data/products.json";
import { Product } from "@/lib/types";

describe("products data", () => {
  it("has 10 products", () => {
    expect(products).toHaveLength(10);
  });

  it("all products have required fields", () => {
    products.forEach((p) => {
      const product = p as Product;
      expect(product.id).toBeDefined();
      expect(product.name).toBeDefined();
      expect(product.price).toBeGreaterThan(0);
      expect(product.collection).toBeDefined();
      expect(product.description).toBeDefined();
      expect(product.images.length).toBeGreaterThan(0);
      expect(product.heroImage).toBeDefined();
    });
  });

  it("all product IDs are unique", () => {
    const ids = products.map((p) => (p as Product).id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("sale products have salePrice less than price", () => {
    products.forEach((p) => {
      const product = p as Product;
      if (product.onSale) {
        expect(product.salePrice).not.toBeNull();
        expect(product.salePrice!).toBeLessThan(product.price);
      }
    });
  });

  it("all products belong to THE_ORIGIN_DROP collection", () => {
    products.forEach((p) => {
      expect((p as Product).collection).toBe("THE_ORIGIN_DROP");
    });
  });
});
