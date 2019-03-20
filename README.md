# SmartChat-Server

![WhatsApp-Clone](README/WhatsApp-Clone.gif)

### Prerequisites

- Git clone
  ```
    git clone https://github.com/vbosstech/WhatsApp-Chat-Server
  ```
- Install [PostgreSQL Docker Desktop for Mac or Windows](https://www.docker.com/products/docker-desktop): https://hub.docker.com/editions/community/docker-ce-desktop-mac
  ```
    cd WhatsApp-Chat-Server
    ## PostgreSQL Docker
    docker-compose up -d
    yarn install
  ```    
-  `--add-sample-data` > Create PostgreSQL Database, User & Password
   ```
     yarn generate
     yarn start --add-sample-data
   ```

> `Apollo Server` is now running on http://localhost:4000   
   
### Deployment

- Run yarn: $ `yarn install`
- Run codegen to generate TypeScript types: $ `yarn generate`
- Run start $ `yarn start`

Note that the server is using a common Cloudinary storage for uploading images. To change Cloudinary URL, please edit the `.env` file.