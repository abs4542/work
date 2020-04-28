from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep
import pprint

from secrets import username, password

class TinderBot():
    def __init__(self):
        self.driver = webdriver.Chrome()

    def login(self):
        self.driver.get('https://tinder.com')

        sleep(5)
        
        fb_btn = self.driver.find_element_by_xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/span/div[2]/button')
        fb_btn.click()

        # switch to login popup
        base_window = self.driver.window_handles[0]
        try:
            self.driver.switch_to_window(self.driver.window_handles[1])
        except Exception:
            sleep(3)
            exitNumber = self.driver.find_element_by_xpath('//*[@id="modal-manager"]/div/div/div[2]/button')
            exitNumber.click()

            sleep(3)
            loginAgain = self.driver.find_element_by_xpath('//*[@id="content"]/div/div[1]/div/main/div[1]/div/div/header/div[1]/div[2]/div/button')
            loginAgain.click()
            sleep(3)
            moreOptions = self.driver.find_element_by_xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/span/button')
            moreOptions.click()
            sleep(3)
            fbAgain = self.driver.find_element_by_xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/span/div[3]/button')
            fbAgain.click()
            self.driver.switch_to_window(self.driver.window_handles[1])

        email_in = self.driver.find_element_by_xpath('//*[@id="email"]')
        email_in.send_keys(username)

        pw_in = self.driver.find_element_by_xpath('//*[@id="pass"]')
        pw_in.send_keys(password)

        login_btn = self.driver.find_element_by_xpath('//*[@id="u_0_0"]')
        login_btn.click()

        self.driver.switch_to_window(base_window)

        sleep(5)
        popup_1 = self.driver.find_element_by_xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/button[1]')
        popup_1.click()

        sleep(3)
        popup_2 = self.driver.find_element_by_xpath('//*[@id="modal-manager"]/div/div/div/div/div[3]/button[1]')
        popup_2.click()

        message = self.driver.find_element_by_xpath('//*[@id="content"]/div/div[2]/div/div/div[2]/button')
        try:
            message.click()
        except Exception:
            pass
        else:
            sleep(3)
            answer = self.driver.find_element_by_xpath('//*[@id="modal-manager"]/div/div/div/div[3]/div[3]/button')
            answer.click()

        self.driver.switch_to_window(base_window)
        sleep(3)
        try:
            popup_3 = self.driver.find_element_by_xpath('//*[@id="modal-manager"]/div/div/div[2]/button/svg/path')
        except Exception:
            pass
        else:
            popup_3.click()

    def like(self):
        like_btn = self.driver.find_element_by_xpath('//*[@id="content"]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/div[4]/button')
        like_btn.click()

    def dislike(self):
        dislike_btn = self.driver.find_element_by_xpath('//*[@id="content"]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/div[2]/button')
        dislike_btn.click()
    
    def nextPic(self):
        element_to_hover_over = self.driver.find_element_by_xpath('//*[@id="content"]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[1]/div[3]/div[1]/div[1]/div/div[1]/div/div')
        hover = ActionChains(self.driver).move_to_element(element_to_hover_over)
        hover.perform()
        hover.pause(2)

        nextPic = self.driver.find_element_by_xpath('//*[@id="content"]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[1]/div[3]/div[2]')
        nextPic.click()
        

    def auto_swipe(self):
        while True:
            sleep(2)
            try:
                self.like()
            except Exception:
                try:
                    self.close_popup()
                except Exception:
                    self.close_match()

    def close_popup(self):
        popup_3 = self.driver.find_element_by_xpath('//*[@id="modal-manager"]/div/div/div[2]/button[2]')
        popup_3.click()

    def close_match(self):
        match_popup = self.driver.find_element_by_xpath('//*[@id="modal-manager-canvas"]/div/div/div[1]/div/div[3]/a')
        match_popup.click()

bot = TinderBot()
bot.login()
#bot.auto_swipe()