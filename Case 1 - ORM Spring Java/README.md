# Case 1 - ORM Spring Java

En la base de datos, el modelo posee las entidades "sd_owners" y "sd_problems". "Owners" tiene una relación 1 a N con "Problems", es decir un Owner puede tener varios Problems, pero un Problem solo puede tener un Owner.

Para que la revisión del caso sea más fácil, por favor comience por el archivo Case1Application que se encuentra en el paquete com.example.case1. 
A partir de ahí, el archivo indica en qué otros archivos se encuentra la implementación de los 3 elementos pedidos en el caso, no obstante, aquí se presenta una pequeña guía:

• Como implementar un objeto que representa una relacion 1 a N (se encuentra en Owner.java & Problems.java)

• Como manipular object pooling para reducir la cantidad de conexiones (se encuentra en HibernateUtil.java)

• Como implementar una transacción que afecte a más de una tabla (se encuentra en Case1Application.java)
