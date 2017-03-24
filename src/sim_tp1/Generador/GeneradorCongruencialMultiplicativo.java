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
public class GeneradorCongruencialMultiplicativo extends Generador {

    

    @Override
    public void setK(int n) {
        if (n > 0){
            super.k = n;
            super.a = 5 + 8 * super.k;
        }
    }
    
    @Override
    public void setC(int n){
        this.c = 0;
    }
    
    @Override
    public int calcularXi(){
        return (this.a * this.x0) % this.m;
    }

    
}

