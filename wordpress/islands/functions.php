<?php

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
