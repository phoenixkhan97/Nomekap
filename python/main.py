import pygame, sys
from settings import *


#opening our game
class Game:
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set.mode((WIDTH, HEIGHT))
        self.clock = pygame.time.Clock()

#run method
    def run(self):
        while True:
            for event in pygame.event.get():
                if event.type == pygame.quit:
                    pygame.quit()
                    sys.exit()

            self.screen.fill("black")
            pygame.display.update()
            self.clock.tick(FPS)

if __name__ == '__main__':
    game = Game()
    game.run()



#https://www.youtube.com/watch?v=AY9MnQ4x3zk to help understand pygame
