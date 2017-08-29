# The problem with this file was the lack of "/" in the urls array. Until "/" was added, the link on the home page wouldn't proceed to `study_guides1.html` because `study_guides1.html` is in the root folder, which wasn't included in the urls array. 

# In short, Rack assumes you'll have one and only one file in the root directory.

use Rack::Static,
  :urls => ["/images", "/scripts", "/css", "/"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type' => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
