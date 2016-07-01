 <?php
/**
 * Template Name: HomePage
 *
 */
?>

<?php get_header(); ?>
<div class='container'>

 <section id='hero-module' style="background: url(<?php the_field('hero_image') ?>) no-repeat center center fixed; ">
  	<div class='text-block'>
  		<h2><?php the_field('hero_title') ?></h2>
  		<p><?php the_field('hero_sub_title') ?></p>
  	</div>
 </section>	


 <section id='services-module'>
 	<h3>Services</h3>
 	<div class='services'>
 		<div class='service'>
 			<h4>Photoshop</h4>
 			<div class='price-box'>
 				<div class='price-blurb'>Starting at</div>
 				<div class='price'><span>50</span></div>
 			</div>
 			<ul class='service-offerings'>
 			    <li>Retouching</li>
 			    <li>Black &amp; White</li>
 			    <li>Borders / Design</li>
 			</ul>
 			<a href="#">Book Now</a>
 		</div>
 		<div class='service'>
 			<h4>Event</h4>

 			<div class='price-box'>
 				<div class='price-blurb'>Starting at</div>
 				<div class='price'><span>150</span></div>
 			</div>
 			<ul class='service-offerings'>
 			    <li>Photography</li>
 			    <li>Videography</li>
 			    <li>Arial Shots</li>
 			    <li>Books</li>
 			</ul>
 			<a href="#">Book Now</a>
 		</div>
 		<div class='service'>
 			<h4>Private</h4>
 			<div class='price-box'>
 				<div class='price-blurb'>Starting at</div>
 				<div class='price'><span>75</span></div>
 			</div>
 			<ul class='service-offerings'>
 			    <li>Photography</li>
 			    <li>Videography</li>
 			    <li>Arial Shots</li>
 			    <li>Books</li>
 			</ul>
 			<a href="#">Book Now</a>
 		</div>
 	</div>
 </section>

</div>


<?php get_footer(); ?>