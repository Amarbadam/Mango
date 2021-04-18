# Mango blog page 
 Ашиглах заавар:

1.Download хийнэ: Onlin_shop 'Folder name '

   
    file-> Open Folder in Visual Studio
    

2.  Visual download npm install in terminal:

3. MySql open Database: User table name accounts
   
        CREATE TABLE IF NOT EXISTS `accounts` (
         `id` int(11) NOT NULL,
         `username` varchar(50) NOT NULL,
         `password` varchar(255) NOT NULL,
         `email` varchar(255) NOT NULL,
         `profilePicture` varchar(255)
      ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

      ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
      ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

4. MySql open Database: Blog table name blogPost
   
   
     CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
     USE `nodelogin`;

     CREATE TABLE IF NOT EXISTS `blogPost` (
          `id` int(11) NOT NULL,
          `title` varchar(50) NOT NULL,
          `desTitle` varchar(50) NOT NULL,
          `description` varchar(255) NOT NULL,
          `blogPhoto` varchar(255) NOT NULL,
          `date` varchar(255),
	  `user` varchar(255) NOT NULL,
          `category` varchar(50)
     ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


     ALTER TABLE `blogPost` ADD PRIMARY KEY (`id`);
     ALTER TABLE `blogPost` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

5. Create file:  .env 

 	DB_HOST  = 'localhost'
	DB_USERNAME  = 'root'
	DB_PASSWORD = ' ****'     /your password /
	DB_NAME = 'nodelogin'

         SERVER_PORT = 3000

6. Open Terminal Start : 
       npm start  
       
7. Open browser: write
   
   localhost:3000 
   
8. Mango blog open Home
   
   <img src="https://scontent.fuln4-1.fna.fbcdn.net/v/t1.15752-9/173187326_306527094410981_5453798534522007180_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=gvrOtwWnS-0AX-O6xUV&_nc_ht=scontent.fuln4-1.fna&oh=dffbb8820b4889cf034621fd18356700&oe=60A17554" />
   
  
  <img src="https://scontent.fuln4-1.fna.fbcdn.net/v/t1.15752-9/174150675_511906733351206_7108543604774272003_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=4VHTWdcn_XwAX9BCBa-&_nc_ht=scontent.fuln4-1.fna&oh=440c548350c452f664b9c78f42285cc6&oe=60A11116" />
  
  
   <img src="https://scontent.fuln4-1.fna.fbcdn.net/v/t1.15752-9/174225203_241738220742316_8009252358611238796_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=lu_lFpjQGYsAX_3AvNb&_nc_oc=AQk_f4u18rtQG2wsyRjcHk3rkXZeappzlC2RnL6VkYX4n6qR83A5d4xI0hO3t38G0xs&_nc_ht=scontent.fuln4-1.fna&oh=c792989b04d850e3e2a178cd3130b407&oe=60A03D09" />
   
  
  9. Mango blog open Image 
      
       <img src="https://scontent.fuln4-2.fna.fbcdn.net/v/t1.15752-9/173984103_141923367937124_8281380117241670939_n.png?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_ohc=1j3so2h8hG8AX8niZ-5&_nc_oc=AQlHoOXI9o3U1WmocJWFCq7qfaSiCN37Il23yTzUQhoYvAUrLPGn6ksu5wXzNneoii0&_nc_ht=scontent.fuln4-2.fna&oh=1c281ddb7219c9b51dc5700d816d1f1b&oe=609FEA9D" />
       
  10. Mango blog open About 
      
      <img src="https://scontent.fuln4-1.fna.fbcdn.net/v/t1.15752-9/173954097_3671102846333397_2320240370128337907_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=RaR5JlmiXiIAX_CtfjA&_nc_ht=scontent.fuln4-1.fna&oh=74514ca2ca81b2dee54e4df74f908b60&oe=60A08EE8" />
      
      <img src="https://scontent.fuln4-1.fna.fbcdn.net/v/t1.15752-9/173386495_1618148841714421_7873504001202185776_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=-hNBDasC7WIAX_zkaz5&_nc_oc=AQnpV-KbcfS3FxPpngMY__i6semLtYCSQURglKQMSyQBhOe2qMZSzNZcQq7HPPMrqy4&_nc_ht=scontent.fuln4-1.fna&oh=506c9a2705a04e992226c58e352afd6d&oe=60A13B8E" />
      
      <img src="https://scontent.fuln4-1.fna.fbcdn.net/v/t1.15752-9/171874419_807938993156543_9019422614418525707_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=DwA-41jHmWcAX-z37_x&_nc_ht=scontent.fuln4-1.fna&oh=22d92ec9177baf78c49f41b250e09954&oe=609FE65B" />
      
 
 
      
           
      
   
    
    
  
  
 
 





