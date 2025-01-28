import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        boolean keepGoing = true;

        Almacen almacen = new Almacen();

        int opcion = 0;

        while (keepGoing) {

            System.out.println("-----------------> Menu principal");
            System.out.println("1. Agregar Producto");
            System.out.println("2. Buscar Producto por nombre");
            System.out.println("3. Buscar productos por categoria");
            System.out.println("4. Mostrar productos por precio");
            System.out.println("5. Consultar stock total");
            System.out.println("6. Eliminar producto por ID");
            System.out.println("7. Salir");

            System.out.println("Enter your option: ");
            opcion = sc.nextInt();

            switch (opcion) {
                case 1:
                    almacen.addNewProduct();
                    break;
                    case 2:
                        System.out.println("Nombre: ");
                        almacen.getProductoForName(sc.next());
                        break;
                    case 3:
                        System.out.println("Categoria: ");
                        almacen.getAllsProductoForCategoria(sc.next());
                        break;
                        case 4:
                            almacen.getAllProducts();
                            break;
                            case 5:
                                almacen.getStockAmount();
                                break;
                                case 6:
                                    System.out.println("Id del producto: ");
                                    almacen.removeProductForId(Integer.parseInt(sc.next()));
                                    break;
                                    case 7:
                                        keepGoing = false;
                                        break;
                                        default:
                                            System.out.println("Opcion no valida");
                                            break;

            }

        }

    }
}