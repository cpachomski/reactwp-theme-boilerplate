<?php

		/* Disable the Admin Bar. */
	remove_action( 'init', 'wp_admin_bar_init' );

	function enqueue_styles() {
		wp_enqueue_style('loading-styles', get_template_directory_uri()  . '/css/loading.css');	
		wp_enqueue_style('header-styles', get_template_directory_uri()  . '/css/header.css');	
		wp_enqueue_style('font-styles', get_template_directory_uri()  . '/css/fonts.css');	
		wp_enqueue_style('services-module-styles', get_template_directory_uri()  . '/css/hero-module.css');	
		wp_enqueue_style('hero-module-styles', get_template_directory_uri()  . '/css/services-module.css');	
		wp_enqueue_style('main-styles', get_stylesheet_uri());		
	}

	function enqueue_scripts() {
		wp_deregister_script('jquery');
   		wp_register_script('jquery', ("http://code.jquery.com/jquery-latest.min.js"), false, '');
   		wp_enqueue_script( 'jquery' );
   		wp_enqueue_script('imgloaded', get_template_directory_uri() . '/js/vendor/imagesloaded.js');
   		wp_enqueue_script('loader', get_template_directory_uri() . '/js/loader.js', array('jquery'));
		wp_enqueue_script('header', get_template_directory_uri() . '/js/header.js', array('jquery'));
		wp_enqueue_script('footer', get_template_directory_uri() . '/js/footer.js', array('jquery'));
	}

 
	function my_acf_settings_path( $path ) {
	    // update path
	    $path = get_stylesheet_directory() . '/acf/';
	    // return
	    return $path; 
	}

	 
	function my_acf_settings_dir( $dir ) {
	    // update path
	    $dir = get_stylesheet_directory_uri() . '/acf/';
	    // return
	    return $dir;	    
	}
		 

	add_theme_support( 'admin-bar', array( 'callback' => '__return_false' ) );

	include_once( get_stylesheet_directory() . '/acf/acf.php' );
	add_filter('acf/settings/path', 'my_acf_settings_path');
	add_filter('acf/settings/dir', 'my_acf_settings_dir');
	add_action('wp_enqueue_scripts', 'enqueue_styles');
	add_action('wp_enqueue_scripts', 'enqueue_scripts');

?>