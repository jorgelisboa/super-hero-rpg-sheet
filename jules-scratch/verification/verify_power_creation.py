from playwright.sync_api import sync_playwright, expect
import os

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Navigate to the local HTML file
    page.goto(f"file://{os.getcwd()}/index.html")

    # Find the "Poderes" section and click the "Adicionar" button inside it
    poderes_section = page.locator("div.bg-slate-800:has-text('Poderes')")
    add_power_button = poderes_section.get_by_role("button", name="+ Adicionar")
    add_power_button.click()

    # Wait for the selection modal to appear and be visible
    selection_modal = page.locator("#power-selection-modal")
    expect(selection_modal).to_be_visible()

    # Select the "Afligir" power in the selection modal
    afligir_button = selection_modal.locator("button:has-text('Afligir')")
    afligir_button.click()

    # Wait for the selection modal to disappear
    expect(selection_modal).to_be_hidden()

    # Wait for the configuration modal to appear and be visible
    config_modal = page.locator("#power-config-modal")
    expect(config_modal).to_be_visible()

    # Wait for the content to be populated by checking for the title
    config_title = config_modal.get_by_role("heading", name="Afligir")
    expect(config_title).to_be_visible()

    # Configure the power in the configuration modal
    atordoado_checkbox = config_modal.locator("input[name='condition'][value='Atordoado']")
    expect(atordoado_checkbox).to_be_visible()
    atordoado_checkbox.check()

    area_checkbox = config_modal.locator("input[name='modifier'][value='Área']")
    expect(area_checkbox).to_be_visible()
    area_checkbox.check()

    # Save the power
    save_button = config_modal.get_by_role("button", name="Salvar Poder")
    save_button.click()

    # Wait for the modal to disappear
    expect(config_modal).to_be_hidden()

    # Take a screenshot of the whole page
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
