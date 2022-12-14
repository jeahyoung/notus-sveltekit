/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		user?: { id: number, email: string },
		connection?: { sql: postgres.Sql }
	}
	// interface Platform {}
	interface Session { 
		user?: {id: number, email: string }
	}
	// interface Stuff {}
}
