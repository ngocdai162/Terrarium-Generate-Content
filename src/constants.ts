import type { CardContent, ContentVisibility, Variant } from './types';

export const BACKGROUNDS = [
  '/background.avif',
  '/cindy-bartillon-sXgByrwaa2o-unsplash.jpg',
  '/decry-yae-JidU7Cr6lmk-unsplash.jpg',
  '/keszthelyi-timi-IH2fN_Ec82w-unsplash.jpg',
  '/keszthelyi-timi-_UDLY5cDrSQ-unsplash.jpg',
  '/ryann-pham-Pss6-x1HCpI-unsplash.jpg',
];

export const DEFAULT_CARD_CONTENT: CardContent = {
  subTitle: 'KIẾN THỨC TERRARIUM #5',
  title: 'Tại sao phải có lớp sỏi dưới đáy?',
  description: 'Bí quyết thoát nước hoàn hảo',
  paragraphItems: [
    'Happy Terrarium',
    'Terrarium là một hệ sinh thái khép kín; chọn cây phù hợp và ánh sáng gián tiếp là chìa khóa để tiểu cảnh luôn xanh tốt.',
  ],
  highlight:
    'Ánh sáng gián tiếp là chìa khóa vàng cho terrarium phát triển khỏe mạnh!',
  listItems: [
    'Thoát nước tự nhiên, tránh úng đọng',
    'Bảo vệ rễ khỏi thối nhũn',
    'Tạo không gian cho rễ hô hấp',
    'Giúp cây phát triển khỏe mạnh',
  ],
  contentImage: '/cindy-bartillon-sXgByrwaa2o-unsplash.jpg',
  handle: '@happyterrarium',
};

export const DEFAULT_CONTENT_VISIBILITY: ContentVisibility = {
  brand: true,
  subTitle: true,
  title: true,
  description: true,
  body: true,
  handle: true,
};

export const getDefaultContentByVariant = (variant: Variant): CardContent => {
  if (variant === '2') {
    return {
      ...DEFAULT_CARD_CONTENT,
      paragraphItems: [
        'Terrarium là hệ sinh thái khép kín với độ ẩm ổn định.',
        'Dùng bình xịt nhẹ 1-2 lần/tháng và tránh nắng trực tiếp.',
      ],
    };
  }

  if (variant === '3') {
    return {
      ...DEFAULT_CARD_CONTENT,
      highlight: 'Mẹo nhanh: Giữ lớp sỏi + than hoạt tính để hạn chế úng rễ.',
      listItems: [
        'Giữ ẩm vừa đủ',
        'Đặt nơi ánh sáng gián tiếp',
        'Mở nắp định kỳ để thoáng khí',
      ],
    };
  }

  if (variant === '4') {
    return {
      ...DEFAULT_CARD_CONTENT,
      listItems: [
        'Tạo lớp sỏi đáy|Giúp thoát nước và giảm úng',
        'Thêm than hoạt tính|Hạn chế mùi và nấm mốc',
        'Phủ nền trồng cây|Giữ cây đứng vững, đủ ẩm',
        'Xịt ẩm định kỳ|Giữ terrarium luôn xanh đẹp',
      ],
    };
  }

  if (variant === '5') {
    return {
      ...DEFAULT_CARD_CONTENT,
      highlight: '99% lỗi terrarium đến từ tưới quá tay trong tuần đầu.',
    };
  }

  if (variant === '6') {
    return {
      ...DEFAULT_CARD_CONTENT,
      highlight: 'Vì sao terrarium bị mốc trắng?',
      paragraphItems: [
        'Độ ẩm cao và thiếu thông gió là nguyên nhân chính.',
        'Hãy mở nắp 20-30 phút mỗi 2-3 ngày và giảm tưới.',
      ],
    };
  }

  if (variant === '7') {
    return {
      ...DEFAULT_CARD_CONTENT,
      listItems: [
        'Lá úa nhanh|Giảm tưới và kiểm tra ánh sáng',
        'Rễ bị thối|Tăng lớp sỏi + thay nền ẩm',
        'Mốc trắng mặt đất|Thông gió định kỳ',
      ],
    };
  }

  if (variant === '8') {
    return {
      ...DEFAULT_CARD_CONTENT,
      highlight: 'Terrarium đẹp nhất khi bạn chăm ít nhưng đúng nhịp.',
      paragraphItems: ['Happy Terrarium'],
    };
  }

  if (variant === '9') {
    return {
      ...DEFAULT_CARD_CONTENT,
      subTitle: '99%',
      description: 'Terrarium chết vì',
      title: 'TƯỚI NƯỚC QUÁ NHIỀU',
      highlight: 'Terrarium là hệ sinh thái khép kín, chỉ cần tưới rất ít.',
      paragraphItems: ['Lưu để nhớ nhé! 💧'],
    };
  }

  if (variant === '10') {
    return {
      ...DEFAULT_CARD_CONTENT,
      subTitle: '4 BÍ KÍP',
      title: 'Chăm terrarium sống lâu',
      description: 'Làm theo 4 điều này',
      highlight: 'Terrarium sẽ đẹp cả năm!',
      listItems: [
        'Tưới nước|1 lần/tháng hoặc khi đất khô',
        'Ánh sáng|Gián tiếp, tránh nắng gắt',
        'Thông gió|Mở nắp 1-2 lần/tuần',
        'Nhiệt độ|18-24°C, tránh nóng lạnh sốc',
      ],
    };
  }

  if (variant === '11') {
    return {
      ...DEFAULT_CARD_CONTENT,
      highlight: 'Ảnh minh họa terrarium thực tế giúp nội dung trực quan hơn.',
      contentImage: '/keszthelyi-timi-IH2fN_Ec82w-unsplash.jpg',
    };
  }

  return DEFAULT_CARD_CONTENT;
};
