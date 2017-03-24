

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sim_tp1.Generador;

/**
 *
 * @author feder
 */
public class GeneradorCongruencialLineal extends Generador{

    @Override
    public void setK(int n) {
        if (n > 0){
            super.k = n;
            super.a = 1 + 4 * this.k;
        }
    }
    
    
    @Override
    public int calcularXi(){
        return ((this.a * this.x0) + this.c) % this.m;
    }

 

    
}

