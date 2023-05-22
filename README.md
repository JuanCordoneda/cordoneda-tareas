# APP-CORDONEDA

Aplicación de servicio de front-end desarrollada en Angular.

## Backend

Servicio de back-end desarrollado en Laravel.

### Instalación

1. Instalar todo el proyecto en la carpeta htdocs de XAMPP o en la carpeta de su cliente preferido.
2. Crear una base de datos con el nombre "tasks".

### Instalación del Backend

1. Abrir el archivo `\backend\.env` y configurar las credenciales y el nombre de la base de datos:

DB_CONNECTION=mysql
DB_HOST= (HOST DE SQL)
DB_PORT= (PUERTO DE SQL)
DB_DATABASE=tasks
DB_USERNAME=root
DB_PASSWORD=

2. Desde la terminal, ir a la carpeta `\backend\`.
3. Ejecutar el comando `composer install` (puede ser necesario ejecutar `composer update` en este punto).
4. Ejecutar el comando `php artisan migrate`.
5. Ejecutar el comando `php artisan serve`.

### Instalación del Front-end

1. Desde la terminal, ir a la carpeta `\frontend`.
2. Ejecutar el comando `npm install -g @angular/cli@10`.
3. Ejecutar el comando `ng serve`.

### Visualización del Proyecto

Para ver el proyecto, acceder a http://localhost:4200/.
