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


/** restrict next and previous posts to those in the same categories only
 * 
 * source: https://wordpress.org/support/topic/how-to-restrict-block-next-post-previous-post-to-same-category/
 * 
 */
add_filter( 'next_post_link',     'islands_post_link', 10, 5 );
add_filter( 'previous_post_link', 'islands_post_link', 10, 5 );

function islands_post_link( $output, $format, $link, $post, $adjacent )
{
	$previous = 'previous' === $adjacent;

	if ( ! ( $previous && is_attachment() ) ) {
		$post = get_adjacent_post( true, '', $previous, 'category' );
	}

	if ( ! $post ) {
		$output = '';
	} else {
		$title = $post->post_title;

		if ( empty( $post->post_title ) ) {
			$title = $previous ? __( 'Previous Post' ) : __( 'Next Post' );
		}

		$title = apply_filters( 'the_title', $title, $post->ID );

		$date = mysql2date( get_option( 'date_format' ), $post->post_date );
		$rel  = $previous ? 'prev' : 'next';

		$string = '<a href="' . get_permalink( $post ) . '" rel="' . $rel . '">';
		$inlink = str_replace( '%title', $title, $link );
		$inlink = str_replace( '%date', $date, $inlink );
		$inlink = $string . $inlink . '</a>';

		$output = str_replace( '%link', $inlink, $format );
	}

	return $output;
}


// ~~~~~~~~~~~ Doing a little simple user listing cleanup ~~~~~~~~~~~~~~~~~~~~~~//
// this removes the search. We can add it back here, if we want to. 
add_action( 'simple_user_listing_before_loop', 'islands_remove_sul_search', 5 );
function islands_remove_sul_search() {
   remove_action( 'simple_user_listing_before_loop',   'sul_template_user_search' );
}

add_action( 'sul_user_loop_author_title', 'islands_remove_sul_author_format', 5);
function islands_remove_sul_author_format() {
	// removing wp-content/plugins/simple-user-listing/includes/simple-user-listing-template-hooks.php
	remove_action( 'sul_user_loop_author_title', 'sul_template_loop_author_name');
}

// removing the avatar until we can get formatting correct
add_action( 'sul_before_user_loop_author_title', 'islands_remove_sul_avatar', 5);
function islands_remove_sul_avatar() {
	// removing wp-content/plugins/simple-user-listing/includes/simple-user-listing-template-hooks.php
	remove_action( 'sul_before_user_loop_author_title', 'sul_template_loop_author_avatar' );

}


// Format the Username 
add_action( 'sul_user_loop_author_title', 'islands_user_loop_author', 10);
function islands_user_loop_author( $user ) {
	// post count
	$num_posts = count_user_posts( $user->ID );
	// user info
	$user_info = get_userdata( $user->ID );
	$display_name = esc_html( $user_info->display_name );

	//i don't think we need number of posts.
	// if ( $num_posts > 0 ) {
	// 	$display_name .= ' <span class="post-count"><span class="hyphen">-</span>' . sprintf( _nx( '1 post', '%s posts', $num_posts, 'number of posts', 'simple-user-listing' ), $num_posts ) . '</span>';
	// }

	$author_posts_url = get_author_posts_url($user->ID);

	echo '<h2 class="author-name"><a href='. $author_posts_url ."'>" . $display_name . '</a></h2>';
}
