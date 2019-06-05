require 'test_helper'

class RappersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rappers_index_url
    assert_response :success
  end

  test "should get show" do
    get rappers_show_url
    assert_response :success
  end

end
