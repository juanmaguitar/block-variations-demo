<?php
/*
Plugin Name: Block Variation Demo
Description: This is a simple plugin that loads a JavaScript file
Version: 1.0
Author: Your Name
*/

function enqueue_block_variations() {
	wp_enqueue_script(
		'variations-js',
		plugins_url( 'variations.js', __FILE__ ),
		array(
			'wp-blocks',
		),
		wp_get_theme()->get( 'Version' ),
		true
	);

	wp_enqueue_script(
		'log-variations-js',
		plugins_url( 'logVariations.js', __FILE__ ),
		array(
			'wp-blocks',
			'wp-block-editor',
            'wp-data'
		),
		wp_get_theme()->get( 'Version' ),
		true
	);
}

add_action('enqueue_block_editor_assets', 'enqueue_block_variations');
