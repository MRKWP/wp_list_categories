<?php
/**
 * Plugin Name:       WP List Categories Block
 * Description:       A dynamic block for wp_list_categories
 * Requires at least: 6.1
 * Requires PHP:      8.1
 * Version:           0.1.0
 * Author:            Matt Knighton
 * License:           MIT
 * Text Domain:       mrkwp/wp_list_categories
 *
 * @package           mrkwp/wp_list_categories
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function block_dynamic_rendering_mrk_wp_list_categories___register_block() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'block_dynamic_rendering_mrk_wp_list_categories___register_block' );
