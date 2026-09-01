import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductCard from "@/components/ProductCard";
import { CartProvider } from "@/lib/cart-context";
import products from "@/data/products.json";
import { Product } from "@/lib/types";

const product = products[0] as Product;

function renderWithCart(ui: React.ReactElement) {
  return render(<CartProvider>{ui}</CartProvider>);
}

describe("ProductCard", () => {
  it("renders product name", () => {
    renderWithCart(<ProductCard product={product} />);
    expect(screen.getByText(product.name)).toBeInTheDocument();
  });

  it("renders sale price when on sale", () => {
    renderWithCart(<ProductCard product={product} />);
    expect(screen.getByText(`$${product.salePrice?.toFixed(2)}`)).toBeInTheDocument();
  });

  it("renders original price as strikethrough when on sale", () => {
    renderWithCart(<ProductCard product={product} />);
    const originalPrice = screen.getByText(`$${product.price.toFixed(2)}`);
    expect(originalPrice).toBeInTheDocument();
    expect(originalPrice.closest("span")).toHaveClass("line-through");
  });
});
