var app = function(){
	
	self.vue = {};

  Vue.config.silent = false; // show all warnings
	
	self.get_tags = function(){
		console.log("getting tags...");
		
		$.getJSON(get_tags_url,
			function(data){
				console.log(data.tags);
				self.vue.tags = data.tags;
			}
		);
	}
	
	self.add_tag = function(){
		console.log(self.vue.new_tag);
		$.post(add_tag_url,
			{
				name: self.vue.new_tag,
				category: self.vue.cur_category
			},
			function(data){
				console.log("Tag created"); 
			}
		)
		
		self.get_tags();
	}
	
	self.vue = new Vue({
		el: "#upload_form",
		delimiters: ['${', '}'],
		unsafeDelimiters: ['!{', '}'],
		data: { new_tag: '',
			cur_category: 'Nature',
			tags: [],
		},
		methods: {
			get_tags: self.get_tags,
			add_tag: self.add_tag,
		}
	});
	
	self.get_tags();
	
	return self;
}

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){APP = app();});