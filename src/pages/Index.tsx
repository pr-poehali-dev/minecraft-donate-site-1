import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const donationPackages = [
    {
      title: "Новичок",
      price: "150₽",
      items: ["Приватка 10x10", "Набор инструментов", "1000 монет"],
      color: "bg-minecraft-green"
    },
    {
      title: "Воин",
      price: "350₽", 
      items: ["Приватка 20x20", "Алмазная броня", "5000 монет", "Флай на 7 дней"],
      color: "bg-minecraft-light-green"
    },
    {
      title: "Легенда",
      price: "700₽",
      items: ["Приватка 50x50", "Элитрины", "15000 монет", "Флай навсегда", "Доступ к /heal"],
      color: "bg-minecraft-emerald"
    }
  ];

  const clans = [
    { name: "Драконы Севера", members: 24, level: 15, leader: "DragonKing" },
    { name: "Железные Воины", members: 18, level: 12, leader: "IronMaster" },
    { name: "Лесные Стражи", members: 32, level: 20, leader: "ForestGuard" }
  ];

  const serverStats = [
    { label: "Онлайн игроков", value: "247", icon: "Users" },
    { label: "Кланов активно", value: "23", icon: "Shield" },
    { label: "Дней работы", value: "1247", icon: "Calendar" },
    { label: "Построек создано", value: "15,847", icon: "Building" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-green/10 to-minecraft-light-green/20">
      {/* Navigation */}
      <nav className="border-b border-minecraft-green/20 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-minecraft-green rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">⛏</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">MineCraft Server</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-600 hover:text-minecraft-green transition-colors">Главная</a>
              <a href="#donate" className="text-gray-600 hover:text-minecraft-green transition-colors">Донат</a>
              <a href="#clans" className="text-gray-600 hover:text-minecraft-green transition-colors">Кланы</a>
              <a href="#stats" className="text-gray-600 hover:text-minecraft-green transition-colors">Статистика</a>
              <a href="#news" className="text-gray-600 hover:text-minecraft-green transition-colors">Новости</a>
              <a href="#contacts" className="text-gray-600 hover:text-minecraft-green transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Добро пожаловать на <span className="text-minecraft-green">MineCraft Server</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Присоединяйся к лучшему survival серверу с системой кланов, гильдий и уникальными возможностями!
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Button size="lg" className="bg-minecraft-green hover:bg-minecraft-dark-green">
              <Icon name="Play" className="mr-2" />
              Играть сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-white">
              <Icon name="Download" className="mr-2" />
              Скачать лаунчер
            </Button>
          </div>

          {/* Server Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {serverStats.map((stat, index) => (
              <Card key={index} className="border-minecraft-green/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Icon name={stat.icon as any} className="w-8 h-8 text-minecraft-green mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Packages */}
      <section id="donate" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Донат пакеты</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donationPackages.map((pkg, index) => (
              <Card key={index} className="relative overflow-hidden border-2 border-minecraft-green/20 hover:border-minecraft-green transition-all hover:scale-105">
                <div className={`absolute top-0 left-0 right-0 h-2 ${pkg.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-gray-800">{pkg.title}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-minecraft-green">{pkg.price}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <Icon name="Check" className="w-4 h-4 text-minecraft-green mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-minecraft-green hover:bg-minecraft-dark-green">
                    <Icon name="CreditCard" className="mr-2 w-4 h-4" />
                    Купить пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clans & Guilds */}
      <section id="clans" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Кланы и Гильдии</h2>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="clans" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="clans">Топ Кланы</TabsTrigger>
                <TabsTrigger value="guilds">Система Гильдий</TabsTrigger>
              </TabsList>
              
              <TabsContent value="clans" className="space-y-4">
                {clans.map((clan, index) => (
                  <Card key={index} className="border-minecraft-green/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-minecraft-green rounded-lg flex items-center justify-center">
                            <Icon name="Shield" className="text-white w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">{clan.name}</h3>
                            <p className="text-gray-600">Лидер: {clan.leader}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="mb-2">Уровень {clan.level}</Badge>
                          <div className="text-sm text-gray-600">{clan.members} участников</div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Прогресс клана</span>
                          <span>{clan.level * 5}%</span>
                        </div>
                        <Progress value={clan.level * 5} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="guilds" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-minecraft-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="Sword" className="mr-2 text-minecraft-green" />
                        Боевые Гильдии
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">Участвуй в PvP турнирах и защищай территории клана</p>
                      <ul className="space-y-2 text-sm">
                        <li>• Еженедельные турниры</li>
                        <li>• Особые награды за победы</li>
                        <li>• Рейтинговая система</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-minecraft-green/20">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="Hammer" className="mr-2 text-minecraft-green" />
                        Строительные Гильдии
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">Создавай уникальные постройки и развивай архитектуру</p>
                      <ul className="space-y-2 text-sm">
                        <li>• Конкурсы построек</li>
                        <li>• Совместные проекты</li>
                        <li>• Обмен ресурсами</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section id="rules" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Правила сервера</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-minecraft-green/20">
              <CardHeader>
                <CardTitle className="text-center text-minecraft-green">Основные правила</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Общение</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Уважай других игроков</li>
                      <li>• Не используй мат</li>
                      <li>• Не спамь в чате</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Игровой процесс</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Не используй читы</li>
                      <li>• Не ломай чужие постройки</li>
                      <li>• Не дюпай предметы</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Последние новости</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-minecraft-green/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">31 июля</Badge>
                <CardTitle>Обновление кланов 2.0</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Добавлены новые возможности для кланов: территории, войны и союзы между кланами.</p>
              </CardContent>
            </Card>
            <Card className="border-minecraft-green/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">28 июля</Badge>
                <CardTitle>Летний ивент</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Начался летний ивент с особыми наградами и ограниченными предметами!</p>
              </CardContent>
            </Card>
            <Card className="border-minecraft-green/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2">25 июля</Badge>
                <CardTitle>Новые донат-пакеты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Обновили донат-пакеты с более выгодными предложениями для игроков.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Контакты</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-minecraft-green/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">Как связаться</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Icon name="MessageCircle" className="w-5 h-5 text-minecraft-green mr-3" />
                        <span>Discord: MineCraftServer#1234</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Send" className="w-5 h-5 text-minecraft-green mr-3" />
                        <span>Telegram: @minecraft_server</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Mail" className="w-5 h-5 text-minecraft-green mr-3" />
                        <span>admin@minecraftserver.ru</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">Подключение</h3>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-2">IP адрес сервера:</div>
                      <div className="text-lg font-mono font-bold text-minecraft-green">play.minecraftserver.ru</div>
                    </div>
                    <Button className="w-full bg-minecraft-green hover:bg-minecraft-dark-green">
                      <Icon name="Copy" className="mr-2 w-4 h-4" />
                      Скопировать IP
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-minecraft-green rounded-sm flex items-center justify-center">
              <span className="text-white text-sm">⛏</span>
            </div>
            <span className="text-xl font-bold">MineCraft Server</span>
          </div>
          <p className="text-gray-400">© 2024 MineCraft Server. Лучший survival сервер с кланами и гильдиями.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;