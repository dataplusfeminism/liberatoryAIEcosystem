<?php

/** Add the CSS that augments the parent theme's CSS */
add_action( 'wp_enqueue_scripts', 'islands_enqueue_styles' );

function islands_enqueue_styles() {
	wp_enqueue_style( 
		'islands-style', 
		get_stylesheet_uri()
	);

	/** I'm not sure if they enqueue parent themes, so adding it here **/
        wp_enqueue_style( 
		'islands-parent-style', 
		get_parent_theme_file_uri( 'style.css' )
	);

}

/** Add any javascript we might need */
add_action( 'wp_enqueue_scripts', 'islands_add_scripts' );

function islands_add_scripts() {
    wp_enqueue_script( 'demo-js', get_stylesheet_directory_uri() . '/js/demo.js', array('jquery'), null, true );
}

