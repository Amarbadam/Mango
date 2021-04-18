# Mango blog page 


   
   <img src="https://scontent.fuln4-1.fna.fbcdn.net/v/t1.15752-9/173187326_306527094410981_5453798534522007180_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=gvrOtwWnS-0AX-O6xUV&_nc_ht=scontent.fuln4-1.fna&oh=dffbb8820b4889cf034621fd18356700&oe=60A17554" />
   

 Ашиглах заавар:

1.Download хийнэ:  

  Clon https://github.com/Amarbadam/Mango.git    

    
2. Visual studio дээр file нээнэ

       Onlin_shop /Folder name/
    

3.  Visual Studio дээрээ Terminal нээж доорх кодыг бичээд Enter дарна :
      
        npm install 

4. MySql татаж суулгаад  Database үүсгэнэ: 

5. Хэрэглэгч бүртгэх хүснэгт үүсгэхдээ:

        CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
         USE `nodelogin`;

        CREATE TABLE IF NOT EXISTS `accounts` (
         `id` int(11) NOT NULL,
         `username` varchar(50) NOT NULL,
         `password` varchar(255) NOT NULL,
         `email` varchar(255) NOT NULL,
         `profilePicture` varchar(255)
       ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

        ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
        ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

6. Mэдээ бүртгэх хүснэгт үүсгэхдээ:
   
   
      
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

7. Visual Studio дээрээ шинэ File үүсгэн ".env " гэж нэрлэнэ

8. Үүсгэсэн File дээрээ доорх кодыг бичнэ үү !  
  /Password хэсэгт өөрийн үүсгэсэн MySql DataBase password бичнэ үү! /

       DB_HOST  = 'localhost'
       DB_USERNAME  = 'root'
       DB_PASSWORD = ' '    
       DB_NAME = 'nodelogin'

         SERVER_PORT = 3000

9.  Visual studio дээрээ terminal гарган доорх кодыг бичэн Enter дарна 

        npm start  
       
10.  Browser нээж хайх хэсэгт доорх кодыг бичнэ: 
   
    localhost:3000 
   

  
  
 
 
      
           
      
   
    
    
  
  
 
 





