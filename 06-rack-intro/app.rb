class App
  def call(environment_hash)
    status_code = 200
    header = {}
    body = ['hello']

    return [status_code, header, body]
  end
end




#     req = Rack::Request.new(environment_hash)
#     resp = Rack::Response.new
#
#     if req.path.match("/cohortName")
#       resp.write("Home")
# elsif req.path.match("/Cohort")
#       resp.write("Capitalized")
#     end
