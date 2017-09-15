use Rack::Static,
  :urls => ["/pages", "/scripts", "/css"],
  :root => "public"

run lambda { |env|
	puts "running the lambda"
  [
    200,
    {
      'Content-Type' => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
