<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Hind+Madurai|Oswald" rel="stylesheet">
        <title><?php echo $blog_title = get_bloginfo(); ?></title>
         <?php wp_head(); ?> 
    </head>
    <body class='not-loaded'>
        
        <loader></loader>

        <header>
            <div>
        	   <h1><?php echo $blog_title = get_bloginfo(); ?></h1>
               <nav>
                   <ul>
                       <li><a href="#">Home</a></li><!--
                    --><li><a href="#">Services</a></li><!--
                    --><li><a href="#">Gallery</a></li><!--
                    --><li><a href="#">Contact</a></li>
                   </ul>
               </nav>
            </div>

        </header>
