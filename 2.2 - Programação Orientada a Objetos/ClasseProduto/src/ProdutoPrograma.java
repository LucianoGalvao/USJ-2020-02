
public class ProdutoPrograma {

	public static void main(String[] args) {

		Produto prod = new Produto();
		prod.codigo = 1111;
		prod.preco = 25.55;
		prod.estoque = 100;

		prod.imprime();
		prod.reajuste(5);
		prod.imprime();
		prod.venda(4);
		prod.compra(3);
		prod.imprime();
		}
}
