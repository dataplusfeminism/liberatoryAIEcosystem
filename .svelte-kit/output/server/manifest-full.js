export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "liberatoryAIEcosystem/_app",
	assets: new Set([".DS_Store",".htaccess","base-images/canva-image.jpg","base-images/cat-photo.jpeg","base-images/test-image-1.jpg","case-study/hero1.jpg","case-study/hero2.jpg","favicon.png","socials/bluesky.png","socials/github.png","socials/instagram.jpeg","socials/linkedin.png"]),
	mimeTypes: {".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cw_zCzZ3.js","app":"_app/immutable/entry/app.Cmtzfyxx.js","imports":["_app/immutable/entry/start.Cw_zCzZ3.js","_app/immutable/chunks/8W8k72Qd.js","_app/immutable/chunks/BQuvKRSg.js","_app/immutable/chunks/B3NkkuVD.js","_app/immutable/chunks/s9O5tKoz.js","_app/immutable/entry/app.Cmtzfyxx.js","_app/immutable/chunks/BQuvKRSg.js","_app/immutable/chunks/Of4x40wU.js","_app/immutable/chunks/DICiqEks.js","_app/immutable/chunks/BSr6WNAr.js","_app/immutable/chunks/s9O5tKoz.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/author",
				pattern: /^\/author\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/casestudy",
				pattern: /^\/casestudy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/template",
				pattern: /^\/template\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/workshops",
				pattern: /^\/workshops\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
