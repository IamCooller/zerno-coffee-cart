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
