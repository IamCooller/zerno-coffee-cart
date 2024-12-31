module.exports = {
	apps: [
		{
			name: "zerno-coffee-cart",
			script: "pnpm",
			args: "run start",
			cwd: "/var/www/zerno-coffee-cart",
			exec_mode: "fork",
			interpreter: "node",
			interpreter_args: "--max-old-space-size=256",
			autorestart: true,
			watch: true,
			max_memory_restart: "256M",
			env: {
				NODE_ENV: "production",
				PORT: 3056,
			},
		},
	],
};

module.exports = {
	apps: [
		{
			script: "index.js",
			watch: ".",
		},
		{
			script: "./service-worker/",
			watch: ["./service-worker"],
		},
	],

	deploy: {
		production: {
			user: "SSH_USERNAME",
			host: "SSH_HOSTMACHINE",
			ref: "origin/master",
			repo: "GIT_REPOSITORY",
			path: "DESTINATION_PATH",
			"pre-deploy-local": "",
			"post-deploy": "npm install && pm2 reload ecosystem.config.js --env production",
			"pre-setup": "",
		},
	},
};
