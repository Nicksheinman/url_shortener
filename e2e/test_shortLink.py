import pytest
import uuid
from playwright.sync_api import Page, expect    

def test_create_anonim_link(page):
    page.goto("http://127.0.0.1:5173/")

    page.fill("input[id='basic-url']", "https://google.com")
    page.click("input[value='Make it short']")

    expect(page.locator("data-testid=shortLink")).to_be_visible()
    
def test_login(page):
    page.goto("http://127.0.0.1:5173/login")
    
    page.fill("input[id='username']", "testuser1")
    page.fill("input[id='password']", "1234567")
    page.get_by_role("button", name="Login").click()
    
    expect(page).to_have_url("http://127.0.0.1:5173/myLinks")
    
@pytest.fixture
def logged_in_page(page):
    page.goto("http://127.0.0.1:5173/login")
    
    page.fill("input[id='username']", "testuser1")
    page.fill("input[id='password']", "1234567")
    page.get_by_role("button", name="Login").click()

    return page

def test_logout(logged_in_page):
    logged_in_page.get_by_role("link", name="Logout").click()
    
    expect(logged_in_page.get_by_role("link", name="Logout")).to_have_count(0)

def test_create_short_link(logged_in_page):
    link=f"https://google.com/{uuid.uuid4()}"
    logged_in_page.fill("input[id='basic-url']", link)
    logged_in_page.get_by_role("button", name="submit").click()

    expect( logged_in_page.locator(f'a[data-source-link="{link}"]')).to_be_visible()
    
    logged_in_page.locator(f'a[data-source-link="{link}"]').click()
    
    expect(logged_in_page).to_have_url(link)
    
@pytest.fixture
def created_link(logged_in_page):
    link=f"https://google.com/{uuid.uuid4()}"
    logged_in_page.fill("input[id='basic-url']", link)
    logged_in_page.get_by_role("button", name="submit").click()
    
    return logged_in_page, link

def test_delete_link(created_link):
    logged_in_page, link = created_link
    
    logged_in_page.locator(f'[data-source-link="{link}"][data-testid="short-link"]').click()
    expect(logged_in_page.locator(f'a[data-source-link="{link}"]')).to_have_count(0)