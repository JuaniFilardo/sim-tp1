
package sim_tp1.Generador;

public abstract class Generador {
   
     protected int a, c, m, x0, xi, k, g;
        
    /**
     * Método de seteo. Variable A
     * @param n, entero positivo
     */
    public void setA(int n) {
        if (n > 0){
            this.a = n;
        }
    }

    /**
     * Método de seteo. Variable C
     * @param n, entero positivo
     */
    public void setC(int n) {
        if (n > 0){
            this.c = n;
        }
    }

    /**
     * Método de seteo. Variable M
     * @param n, entero positivo
     */
    public void setM(int n) {
        if (n > 0){
            this.m = n;
        }
    }

    /**
     * Método de seteo de la semilla
     * @param n, entero positivo
     */
    public void setX0(int n) {
        if (n > 0 ){
            this.x0 = n;    
        }
    }

    /**
     * Método de seteo. Variable G
     * @param n, entero positivo
     * Utiliza el valor pasado por parámetro (g) para calcular M
     */
    public void setG(int n) {
        if (n > 0){
            this.g = n;
            this.m = (int)Math.pow(2, this.g);
        }
    }

    /**
     * Método de seteo. Variable K
     * @param n, entero positivo
     * Método abstracto redefinido en las subclases
     */
    public abstract void setK(int n);

    /**
     * Método calcularSiguiete
     * Calcula el siguiente número aleatorio.
     * Hace uso del patrón Template Method
     * El método que se invoca calcularXi se redefine en cada una de las subclases
     * @return r -> Número aleatorio
     */
    public double calcularSiguiente() {
       this.xi = calcularXi();
       this.x0 = this.xi;
       double r = (double)xi / (m-1);
       return r;
    }
    
    public int getXi(){
        return xi;
    }
    
    /**
     * Método de calculo de Xi+1 
     * Método abstracto redefinido en las subclases. Depende del generador que estemos usando
     * @return entero positivo
     */
    public abstract int calcularXi();
    
    
    
    
}
