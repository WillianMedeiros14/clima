export function condition(condition){
    switch(condition){

        case 'storm': //tempestade//
            return icon = {
                name: 'thunderstorm', color: '#746785'
            };
            break;

        case 'snow': //neve//
            return icon = {
                name: 'snow', color: '#FFF'
            };
            break;

        case 'hail': //granizo
            return icon = {
                name: '###', color: '#FFF'
            };
            break;

        case 'rain': //chuva//
            return icon = {
                name: 'rainy', color: '#FFF'
            };
            break;

        case 'rain': //neblina
            return icon = {
                name: '###', color: '#6d5e80'
            };
            break;

        case 'clear_day': //dia limpo//
            return icon = {
                name: 'partly-sunny-outline', color: '#FFB300'
            };
            break;

        case 'clear_night': //noite limpa//
            return icon = {
                name: 'moon', color: '#FFF'
            };
            break;

        case 'cloud': //nublado//
            return icon = {
                name: 'cloud', color: '#746785'
            };
            break;

        case 'cloudly_day': //nublado de dia//
            return icon = {
                name: 'partly-sunny', color: '#746785'
            };
            break;
    
        case 'cloudly_night': //nublado de noite//
            return icon = {
                name: 'cloudy-night', color: '#746785'
            };
            break;

        case 'none_day': //erro ao obter mas está de dia//
            return icon = {
                name: 'partly-sunny-outline', color: '#FFB300'
            };
            break;

        case 'none_night': //erro ao obter mas está de noite//
            return icon = {
                name: 'moon', color: '#FFF'
            };
            break;
        
    }
}