# api.py
# various api functions 
# 1/7/2019
# Winston Cooper


def get_tags():
		tags = db(db.tags).select()
		return response.json(
			dict(
				tags = tags
				#tags = ["test", "chest"]
			)
		)
		
def add_tag():
		tags = db().select(db.tags.name)
		if request.vars.name not in tags:
			db.tags.insert(
				name = request.vars.name,
				category = request.vars.category,
				cover_photo = request.vars.cover
			)
		return
		
def remove_tag():
		db(db.tags.name == request.vars.name).delete()
		return
		
def upload_photo():
		return