import java.util.*;
import java.util.stream.Collectors;

public class Almacen {

    private List<Producto> productos;

    private int productosCount = 0;

    public Almacen() {
        productos = new ArrayList<>();
    }

    public static Scanner sc = new Scanner(System.in);

    public void addNewProduct(){

        System.out.println("Ingrese el nombre del producto: ");
        String nombre = sc.nextLine();
        System.out.println("Ingrese la categoria del producto: ");
        String categoria = sc.nextLine();
        System.out.println("Ingresa el precio del producto: ");
        double precio = Double.parseDouble(sc.nextLine());
        System.out.println("Ingresa la cantidad en stock del producto:");
        int stock = Integer.parseInt(sc.nextLine());

        Producto producto = new Producto(productosCount + 1, nombre, categoria, precio, stock);
        productos.add(producto);
        productosCount++;
        System.out.println("El producto se ha agregado correctamente" + producto.toString());
    }

    public void getProductoForName(String name){
        Producto producto = productos.stream().filter(p -> p.getNombre() != null && p.getNombre().equals(name)).findFirst().orElse(null);

        if(producto == null){
            System.out.println("El producto no existe");
        }else{
            System.out.println("El producto que busco es: " + producto.toString());
        }
    }

    public void getAllsProductoForCategoria(String categoria){
        List<Producto> productoList = productos.stream().filter(p -> p.getCategoria().equals(categoria)).collect(Collectors.toList());

        productoList.stream().forEach(producto -> System.out.println(producto.toString()));
    }

    public void getAllProducts(){
        List<Producto> productoListForPrecioAscendente = productos;
        productoListForPrecioAscendente.sort(Comparator.comparing(Producto::getPrecio));

        for(Producto producto : productoListForPrecioAscendente){
            System.out.println(producto.toString());
        }
    }

    public void getStockAmount(){
        int stockAmount = productos.stream().mapToInt(Producto::getStock).sum();
        System.out.println("El stock de los productos es: " + stockAmount);
    }

    public void removeProductForId(int id){
        Producto producto = productos.get(id);
        productos.remove(id);

        if(producto == null){
            System.out.println("El producto no existe");
        }else {
            System.out.println("El producto fue eliminado con exito!!");
        }
    }
}