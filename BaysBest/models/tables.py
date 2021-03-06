# Define your tables below (or better in another model file) for example
#
# >>> db.define_table('mytable', Field('myfield', 'string'))
#
# Fields can be 'string','text','password','integer','double','boolean'
#       'date','time','datetime','blob','upload', 'reference TABLENAME'
# There is an implicit 'id integer autoincrement' field
# Consult manual for more options, validators, etc.

db.define_table('tags',
	Field('created_on', 'datetime', default=request.now),
	Field('name'),
	Field('category'),
	Field('cover_photo', 'upload')
)

db.define_table('photos',
	Field('created_on', 'datetime', default=request.now),
	Field('image', 'upload'),
	Field('tags')
)

# after defining tables, uncomment below to enable auditing
# auth.enable_record_versioning(db)
