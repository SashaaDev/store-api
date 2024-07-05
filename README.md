
**README.md:**

# Food Store API

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/SashaaDev/store-api.git
   cd store-api
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Создайте файл `.env` на основе `.env.example` и заполните его:
   ```bash
   cp .env.example .env
   ```

4. Настройте базу данных:
   ```bash
   mysql -u root -p < init.sql
   ```

5. Запустите сервер:
   ```bash
   npm run dev
   ```

## API Маршруты

### Создание категории
- **URL:** `POST /category`
- **Тело запроса:**
  ```json
  {
    "name": "firstCategory"
  }
  ```
- **Ответ:** JSON объект с информацией о категории

### Создание товара
- **URL:** `POST /product`
- **Тело запроса:**
  ```json
  {
    "apiKey": "apiKey123",
    "name": "Bird",
    "description": "Product description",
    "price": 100.00,
    "imageUrl": "https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg",
    "categoryId": 1,
    "stock": 10
  }
  ```
- **Ответ:** JSON объект с информацией о товаре

### Получение всех товаров по категории
- **URL:** `GET /products/:categoryId`
- **Ответ:** JSON массив объектов с товарами

### Получение товара по ID
- **URL:** `GET /product/:id`
- **Ответ:** JSON объект с информацией о товаре

### Удаление товара
- **URL:** `DELETE /product/:id`
- **Тело запроса:**
  ```json
  {
    "apiKey": "apiKey123"
  }
  ```
- **Ответ:** Сообщение об успешном удалении

### Обновление товара
- **URL:** `PUT /product/:id`
- **Тело запроса:**
  ```json
  {
    "apiKey": "apiKey123",
    "name": "Updated name",
    "description": "Updated description",
    "price": 150.00,
    "imageUrl": "http://example.com/new-image.jpg",
    "categoryId": 2,
    "stock": 20
  }
  ```
- **Ответ:** JSON объект с обновленной информацией о товаре

### Получение всех категорий
- **URL:** `GET /categories`
- **Ответ:** JSON массив объектов с категориями


### Шаг 5: Создание репозитория на GitHub и публикация проекта

1. Инициализируйте локальный репозиторий:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Создайте новый репозиторий на GitHub и добавьте удаленный репозиторий:
   ```bash
   git remote add origin https://github.com/yourusername/food-store-api.git
   git branch -M main
   git push -u origin main
   ```
   
### Postman Collection
https://www.postman.com/spacecraft-specialist-65810444/workspace/backendproductcategorytask/collection/32997618-89320bc2-d0d3-4ec0-8a2f-ef92ad48c6a3

Все запросы - GET, POST, PUT, DELETE описанные выше можно посмотреть в Postman Collection.
Также её можно импортировать и запускать.