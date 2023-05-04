# Exemplos de inputs para o programa

* **Exemplo Mauro - [Aula 2](https://www.youtube.com/watch?v=pKTTomkzmtI&list=PLd-joCPmafzEULUNRgSsVVUnP5epJHWGR&index=5&ab_channel=MauroNacifRocha)**
    ```
    Max 5X1 + 2X2;
    sa
    X1 + 2X2 <= 8;
    X1 <= 4;
    X2 <= 3;
    ```

* **Entrada correta:**
    ```
    MAX
    30X1 + 20X2;
    ST
    2X1+X2<=8;
    X1+3X2<=8;
    END
    ```
* **Erro -> variavel a mais**
    ```
    MAX
    30X1 + 20X2 - 2X3;
    ST
    2X1+X2<=8;
    X1+3X2<=8;
    END
    ```