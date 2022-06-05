<template>
  <div class="about">
    <h1 class="text-center">This is an about page</h1>
    <h3>Front-end</h3>
    <ul>
      <li><s>Title için props oluşturulacak.</s></li>
      <li><s>URI'ler gizli olmadığı için normal config klasöründe oluşturuldular.</s> Fakat yine de Vite ye alındığında dotenv kullanımına dikkat edilmeli.</li>
      <li>Validation'lar yapılmadı. Ancak bu yeni bir paket kullanılmadan mongoose ile yapılacak. Her halûkarda paket ile iş yapılmasını sevemedim.</li>
      <li>Bootstrap çok paspal, değişmesi gerekir.</li>
      <li>Sayfalandırma yapılmadı</li>
      <li>Silmede, güncellemede ve yeni eklemede sayfanın yeniden yükleniyor gibi olması konusunda araştırma yapılmalı.</li>
      <li>Resim yükleme üzerinde çalışılmalı.</li>
      <li>Aslında Post'u personele çevirip, ardından yolculuk oluşturulmalı fakat bunun için henüz erken olduğunu düşünüyorum. Öncelikle dört öğesi bulunan Post için bir Comments oluşturularak, nosql'in relation'larına bakılmalı.</li>
      <li>Aynı anda tüm verilerin silinebilmesi için işlem yapılacak.</li>
      <li>Soft delete uygulanacak. Soft delete edilen veriler için özel sayfa yapılarak, bunların kontrollü biçimde tamamen silinmesi sağlanacak.</li>
      <li>Maalesef yapı biraz PHP spagetti kod mantığı ile oldu. Ancak basitleştirmek için bu yapılmalıydı. İkinci sürümde pinia kullanılacak zaten.</li>
    </ul> 
    <h3>Back-end</h3>
    <ul>
      <li>Kullanıcı girişi ve yetkilendirme yapılmalı.</li>
    </ul>
  </div>
</template>
<style>
.about {
  text-align: left;
}
</style>
