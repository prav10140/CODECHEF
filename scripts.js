
document.addEventListener('DOMContentLoaded', function() {
    const codeExamples = [
        {
            id: 1,
            title: "Greater Average",
            code: `#include <bits/stdc++.h>
using namespace std;

int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int a,b,c;
	    cin>>a>>b>>c;
	    double avg = (a + b) / 2.0;
	    if(avg>c){
	        cout<<"YES"<<endl;
	    }else{
	        cout<<"NO"<<endl;
	    }
	}

}
`
        },
        {
            id: 2,
            title: "Subscriptions",
            code: `#include <bits/stdc++.h>
using namespace std;
#include <cmath>
int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int a,b;
	    cin>>a>>b;
	    int x;
	    if(a%6==0){
	        cout<<b*(a/6)<<endl;
	    }else{
	        x=ceil((a/6)+1);
	        cout<<x*b<<endl;
	    }
	}

}
`
        },
        {
            id: 3,
            title: "Janmansh and Assignments",
            code: `#include <bits/stdc++.h>
using namespace std;

int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int b;
	    cin>>b;
	    if((b+=3)<=10){
	        cout<<"YES"<<endl;
	    }else{
	        cout<<"NO"<<endl;
	    }
	}

}`
        },
        {
            id:4,
            title: "Exams",
            code:`#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        int num = a*b;
        if((num/2)<c){
            cout<<"YES"<<endl;
        }else{
            cout<<"NO"<<endl;
        }
    }

}`
        },
        
            {
                "id": 5,
                "title": "Chef in his Office",
                "code":`#include <bits/stdc++.h>
using namespace std;

int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int a,b;
	    cin>>a>>b;
	    int c;
	    c=a*4;
	    int x;
	    x=c+b;
	    cout<<x<<endl;
	
	}

}`
            },
            {
                "id": 6,
                "title": "Mahasena",
                "code": `#include <bits/stdc++.h>
using namespace std;
vector<int> v;
int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int x;
	    cin>>x;
	    v.push_back(x);
	}
	int ready =0;
	int not_ready =0;
	for(int val:v){
	   if(val%2==0){
	       ready++;
	   }else{
	       not_ready++;
	   }
	}
	if(ready>not_ready){
	    cout<<"READY FOR BATTLE"<<endl;
	}else{
	    cout<<"NOT READY"<<endl;
	}

}
`
            },
            {
                "id": 7,
                "title": "CRED Coins",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int coins,num;
	    cin>>coins>>num;
	    int x;
	    x=(coins*num)/100;
	    if(x>=1){
	        cout<<x<<endl;
	    }else{
	        cout<<0<<endl;
	    }
	}

}
`
            },
            {
                "id": 8,
                "title": "Water Filling",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        if((a+b+c)>=2){
            cout<<"Not now"<<endl;
        }else{
            cout<<"Water filling time"<<endl;
        }
    }

}
`
            },
            {
                "id": 9,
                "title": "Sale Season",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int a;
	    cin>>a;
	    if(a<=100){
	        cout<<a<<endl;
	    }else if(a>100 && a<=1000){
	        cout<<a-25<<endl;
	    }else if(a>1000&&a<=5000){
	        cout<<a-100<<endl;
	    }else{
	        cout<<a-500<<endl;
	    }
	}

}
`
            },
            {
                "id": 10,
                "title": "Minimum Pizzas",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int a,b;
	    cin>>a>>b;
	    int c=a*b;
	    if(c%4!=0){
	        cout<<(c/4)+1<<endl;
	    }else{
	        cout<<c/4<<endl;
	    }
	}
	

}
`
            },
            {
                "id": 11,
                "title": "Chefland Games",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c,d;
        cin>>a>>b>>c>>d;
        if((a+b+c+d)==0){
            cout<<"IN"<<endl;
        }else{
            cout<<"OUT"<<endl;
        }
    }

}
`
            },
            {
                "id": 12,
                "title": "Expert Setter",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n; 
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        if((b*100/a>=50)){
            cout<<"YES"<<endl;
        }else{
            cout<<"NO"<<endl;
        }
    }
}
`
            },
            {
                "id": 13,
                "title": "Chef and NextGen",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n; 
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        if((b*100/a>=50)){
            cout<<"YES"<<endl;
        }else{
            cout<<"NO"<<endl;
        }
    }
}
`
            },
            {
                "id": 14,
                "title": "Sugarcane Juice Business",
                "code": `#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    while (n--) {
        long long a;
        cin >> a;
        long long cur = a * 50;             // Ensure this doesn't overflow
        long long use = (70 * cur) / 100;  // Use long long for all calculations
        long long profit = cur - use;
        cout << profit << endl;
    }
    return 0;
}
`
            },
            {
                "id": 15,
                "title": "Count the Notebooks",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        int b=a*1000/100;
        cout<<b<<endl;
    }

}
`
            },
            {
                "id": 16,
                "title": "Chef and Candies",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a, b;
        cin>>a>>b;
        int count =0;
        while(a>b){
            b=b+4;
            count+=1;
        }
        cout<<count<<endl;
    }

}
`
            },
            {
                "id": 17,
                "title": "Car or Bike",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        if(a<b){
            cout<<"BIKE"<<endl;
        }else if(a>b){
            cout<<"CAR"<<endl;
        }else{
            cout<<"SAME"<<endl;
        }
    }

}
`
            },
            {
                "id": 18,
                "title": "Is the Score Consistent",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c,d;
        cin>>a>>b>>c>>d;
        if(a<=c&& b<=d){
            cout<<"POSSIBLE"<<endl;
        }else{
            cout<<"IMPOSSIBLE"<<endl;
        }
    }

}
`
            },
            {
                "id": 19,
                "title": "The Three Topics",
                "code": `#include <bits/stdc++.h>
using namespace std;
vector<int> v;
int main() {
    int a,b,c,d;
    cin>>a>>b>>c>>d;
    v.push_back(a);
    v.push_back(b);
    v.push_back(c);
    auto e=find(v.begin(),v.end(),d);
    if(e!=v.end()){
        cout<<"Yes"<<endl;
    }else{
        cout<<"No"<<endl;
    }

}
`
            },
            {
                "id": 20,
                "title": "Monopoly",
                "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int a,b,c,d;
	    cin>>a>>b>>c>>d;
	    vector<int> v={a,b,c,d};
	    int x=*max_element(v.begin(),v.end());
	    int y=a+b+c+d-x;
	    if(y<x){
	        cout<<"Yes"<<endl;
	    }else{
	        cout<<"No"<<endl;
	    }
	    
	    
	    
	}

}
`
            },
            {
                "id": 21,
                "title": "Problems in your to-do list",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        vector<int> v;
        for(int j=0; j<a; j++){
            int b;
            cin>>b;
            v.push_back(b);
        }
        
        int count=0;
        for(int val: v){
        if(val>=1000){
            count+=1;
           }
        }
        cout<<count<<endl;
    }


}
`
            },
            {
                "id": 22,
                "title": "Air Conditioner Temperature",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        if(max(a,c)<=b){
            cout<<"Yes"<<endl;
        }else{
            cout<<"No"<<endl;
        }
        
    }

}
`
            },
            {
                "id": 23,
                "title": "Nearest Exit",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        if(a<=50 && a>=1){
            cout<<"LEFT"<<endl;
        }else{
            cout<<"Right"<<endl;
        }
    }

}
`
            },
            {
                "id": 24,
                "title": "Reverse The Number",
                "code": `#include <iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        int num=0;
        while (a>0){
            int digit=a%10;
            num = num*10 +digit;
            a=a/10;
        }
        cout<<num<<endl;
    }
}
`
            },
            {
                "id": 25,
                "title": "Sasta Shark Tank",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
     int n;
     cin>>n;
     for(int i=0; i<n; i++){
         int a,b;
         cin>>a>>b;
         int x= (a*100)/10;
         int y=(b*100)/20;
     if(x>y){
         cout<<"FIRST"<<endl;
     }else if(y>x){
         cout<<"SECOND"<<endl;
     }else{
         cout<<"ANY"<<endl;
     }

     }

}
`
            },
            {
                "id": 26,
                "title": "Good Program",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        if(a%4==0){
            cout<<"Good"<<endl;
        }else{
            cout<<"Not Good"<<endl;
        }
    }

}
`
            },
            {
                "id": 27,
                "title": "Qualify the round",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int a,b,c;
	    cin>>a>>b>>c;
	    if(a<=(b+2*c)){
	        cout<<"Qualify"<<endl;
	    }else{
	        cout<<"NotQualify"<<endl;
	    }
	}

}
`
            },
            {
                "id": 28,
                "title": "Elections in Chefland",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int a,b;
	    int count=0;
	    cin>>a>>b;
	    for(int j=0; j<a; j++){
	        int c;
	        cin>>c;
	        if(c>=b){
	            count+=1;
	        }
	    }
	    cout<<count<<endl;
	}

}
`
            },
            {
                "id": 29,
                "title": "Minimum Cars required",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        cout<<ceil((double)a/4)<<endl;
    }

}
`
            },
            {
                "id": 30,
                "title": "Test Score",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        if(c%b==0){
            cout<<"YES"<<endl;
        }else{
            cout<<"NO"<<endl;
        }
    }

}
`
            },
            {
                "id": 31,
                "title": "Jenga Night",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        if(b%a==0){
            cout<<"YES"<<endl;
        }else{
            cout<<"NO"<<endl;
        }
    }
}
`
            },
            {
                "id": 32,
                "title": "Bus Seat Numbering",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        if(a<=10){
            cout<<"Lower Double"<<endl;
        }else if(a<=15){
            cout<<"Lower Single"<<endl;
        }else if(a<=25){
            cout<<"Upper Double"<<endl;
        }else{
            cout<<"Upper Single"<<endl;
        }
    }

}
`
            },
            {
                "id": 33,
                "title": "Discus Throw",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        int x=max(a,b);
        int y=max(x,c);
        cout<<y<<endl;
    }
}
`
            },
            {
                "id": 34,
                "title": "Maximise the Tastiness",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c,d;
        cin>>a>>b>>c>>d;
        int x=max(a,b);
        int y=max(c,d);
        cout<<x+y<<endl;
    }
}
`
            },
            {
                "id": 35,
                "title": "Watching Movies at 2x",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a,b;
    cin>>a>>b;
    int x=b/2;
    int y=a-b;
    cout<<x+y<<endl;

}
`
            },
            {
                "id": 36,
                "title": "Police and Thief",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        int count=0;
        if(a>b)a=-a,b=-b;
        while(a<b){
            a=a+2;
            b=b+1;
            count+=1;
        }
        cout<<count<<endl;
        
    }
}

`
            },
            {
                "id": 37,
                "title": "Flip the cards",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    int minimum;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        minimum=min(b,a-b);
        cout<<minimum<<endl;
    }
    
}
`
            },
            {
                "id": 38,
                "title": "Bath in Winters",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        int x=2*b;
        if(a>=x){
            cout<<a/x<<endl;
        }else{
            cout<<0<<endl;
        }
    }

}
`
            },
            {
                "id": 39,
                "title": "Finding Shoes",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int a,b ;
	    cin>>a>>b;
	    if(a>b){
	        cout<<a+abs(a-b)<<endl;
	    }else{
	        cout<<a<<endl;
	    }
	    
	}

}
`
            },
            {
                "id": 40,
                "title": "Small factorials",
                "code": `#include <bits/stdc++.h>
#include <boost/multiprecision/cpp_int.hpp>
using namespace std;
using namespace boost::multiprecision;
int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    cpp_int fact=1;
	    int a;
	    cin>>a;
        for(int i=1; i<=a; i++){
            fact*=i;
        }
        cout<<fact<<endl;
	}

}
`
            },
            {
                "id": 41,
                "title": "Mario and Transformation",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    vector<string> v={"NORMAL","HUGE","SMALL"};
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        int x=1;
        string y;
        while(a--){
            if(x>=3){
                x=0;
            }
            y=v[x];
            x++;
        }
        cout<<y<<endl;
    }

}
`
            },
            {
                "id": 42,
                "title": "Mario and Bullet",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        int t=b/a;
        if(t<c){
            cout<<c-t<<endl;
        }else{
            cout<<0<<endl;
        }
    }
}
`
            },
            {
                "id": 43,
                "title": "Chess Ratings",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int x,y;
        cin>>x>>y;
        int count=0;
        while(x<y){
            x=x+8;
            count++;
        }
        cout<<count<<endl;
    }

}
`
            },
            {
                "id": 44,
                "title": "Complementary Strand in a DNA",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    while (n--) {
        int a;
        cin >> a; 
        string dna;
        cin >> dna;

        for (char &c : dna) {
            if (c == 'A') c = 'T';
            else if (c == 'T') c = 'A';
            else if (c == 'C') c = 'G';
            else if (c == 'G') c = 'C';
        }

        cout << dna << endl; 
    }

    return 0;
}
`
            },
            {
                "id": 45,
                "title": "Chef and Water Bottles",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        if(a<c/b){
            cout<<a<<endl;
        }else{
            cout<<c/b<<endl;
        }
    }

}
`
            },
            {
                "id": 46,
                "title": "Candy Distribution",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        int x=a%b;
        int y=a/b;
        if(x==0&&y%2==0){
            cout<<"Yes"<<endl;
        }else{
            cout<<"No"<<endl;
        }
    }

}
`
            },
            {
                "id": 47,
                "title": "Finding Square Roots",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
	int n;
	cin>>n;
	for(int i=0; i<n; i++){
	    int a;
	    cin>>a;
	    int x=sqrt(a);
	    cout<<x<<endl;
	}

}
`
            },
            {
                "id": 48,
                "title": "The Last Levels",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        int x;
        if(a>3 && a%3==0){
            x=(a/3);
            cout<<a*b + (x-1)*c<<endl;
        }else if(a>3){
            cout<<a*b< <endl;
        }
        
    }

}
`
            },
            {
                "id": 49,
                "title": "Blackjack",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>;
        if(a+b+10>=21){
            cout<<21-a+b<<endl;
        }
    }

}
`
            },
            {
                "id": 50,
                "title": "Fill Candies",
                "code": `#include <iostream>
using namespace std;
int main() {
    int n;
    cin >> n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        int can=b*c;
        int ret =(a+can-1)/can;
        cout<<ret<<endl;
    }

    return 0;
}
`
            },
            {
                "id": 51,
                "title": "X Jumps",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    int x;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        if(a<b){
            cout<<a<<endl;
        }else if(a%b==0){
            cout<<a/b<<endl;
        }else{
            int z=floor((double)a / b);
            x=a/b;
            int y=x*b;
            while(y!=a){
                z+=1;
                y+=1;
            }
            cout<<z<<endl;
        }
    }
}
`
            },
            {
                "id": 52,
                "title": "Chessboard Distance",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c,d;
        cin>>a>>b>>c>>d;
        cout<<max(abs(a-c),abs(b-d))<<endl;
    }
}
`
            },
            {
                "id": 53,
                "title": "Valentine is Coming",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        cout<<a/b<<endl;
    }

}
`
            },
            {
                "id": 54,
                "title": "It is My Serve",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<string> v = {"Alice", "Bob"};
    
    for (int i = 0; i < n; i++) {
        int a, b;
        cin >> a >> b;
        int x = a + b;
        cout << v[(x/2) % 2] << endl;  // Use modulo to prevent out-of-bounds
        
    }
}
`
            },
            {
                "id": 55,
                "title": "Water Mixing",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c,d;
        cin>>a>>b>>c>>d;
        if(a<b){
            if((a+c)>=b){
                cout<<"YES"<<endl;
            }else{
                cout<<"NO"<<endl;
            }
        }else if(b<a){
            if((a-b)<=d){
                cout<<"YES"<<endl;
            }else{
                cout<<"NO"<<endl;
            }
        }else if(a==b){
            cout<<"YES"<<endl;
        }
    }
}
`
            },
            {
                "id": 56,
                "title": "Weights",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c,d;
        cin>>a>>b>>c>>d;
        if(a==b||a==b||a==c||a==d||a==b+c||a==c+d||a==b+d||a==b+c+d){
            cout<<"YES"<<endl;
        }else{
            cout<<"NO"<<endl;
        }
    }

}
`
            },
            {
                "id": 57,
                "title": "Chef and his Apps",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c,d;
        cin>>a>>b>>c>>d;
        int x=b+c+d;
        if(a>=x){
            cout<<0<<endl;
        }else if(a<x){
            if(a>=(b+d)){
                cout<<1<<endl;
            }else if(a>=(c+d)){
                cout<<1<<endl;
            }else{
                cout<<2<<endl;
            }
        }
    }
}
`
            },
            {
                "id": 58,
                "title": "Chef Eren",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        int countOdd=0;
        int countEven=0;
        for(int i=1; i<a+1; i++){
            if(i%2==0){
                countEven+=1;
            }else{
                countOdd+=1;
            }
        }cout<<(countEven*b)+(countOdd*c)<<endl;
    }
}
`
            },
            {
                "id": 59,
                "title": "Minimum number of coins",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        if(a%10==0){
            cout<<a/10<<endl;
        }else if(a%5==0){
            a=a-5;
            cout<<(a/10)+1<<endl;
        }else{
            cout<<-1<<endl;
        }
    }
}
`
            },
            {
                "id": 60,
                "title": "Airlines",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        if((a*100)>=b){
            cout<<0<<endl;
        }else{
            int count =0;
            while((a*100)<b){
                count++;
                a++;
            }
            cout<<count<<endl;
        }
    }
}
`
            },
            {
                "id": 61,
                "title": "Self Defence Training",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        int count=0;
        for(int j=0; j<a; j++){
            int b;
            cin>>b;
            if(b>=10 && b<=60){
                count++;
            }
        }
        cout<<count<<endl;
    }
}
`
            },
            {
                "id": 62,
                "title": "Cup Finals",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        if(abs(a-b)<=c){
            cout<<"YES"<<endl;
        }else{
            cout<<"NO"<<endl;
        }
    }
}
`
            },
            {
                "id": 63,
                "title": "Too many Floors",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        double a,b;
        cin>>a>>b;
        float c=a/10;
        float d=b/10;
        int x=ceil(c);
        int y=ceil(d);
        cout<<abs(x-y)<<endl;
    }
}

`
            },
            {
                "id": 64,
                "title": "Speed Limit Test",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        double a,x,b,y;
        cin>>a>>x>>b>>y;
        if((a/x)>(b/y)){
            cout<<"Alice"<<endl;
        }else if((a/x)<(b/y)){
            cout<<"Bob"<<endl;
        }else{
            cout<<"Equal"<<endl;
        }
    }
}
`
            },
            {
                "id": 65,
                "title": "Decrement OR Increment",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    if(n%4==0){
        n++;
    }else{
        n--;
    }
    cout<<n<<endl;
}
`
            },
            {
                "id": 66,
                "title": "A or B",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        int c=a+b;
        int x=(500-2*a)+(1000-c*4);
        int y=(500-2*c)+(1000-b*4);
        int maximum = max(x,y);
        cout<<maximum<<endl;
    }
    
}
`
            },
            {
                "id": 67,
                "title": "Second Largest",
                "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        vector<int> v;
        int a,b,c;
        cin>>a>>b>>c;
        v.push_back(a);
        v.push_back(b);
        v.push_back(c);
        stable_sort(v.begin(), v.end());
        cout<<v.at(1)<<endl;
    }
}
`
            },
            {
                "id": 68,
                "title": "Pass or Fail",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        int right = b*3;
        int wrong =(a-b);
        int marksGot = right - wrong;
        if(marksGot>=c){
            cout<<"PASS"<<endl;
        }else{
            cout<<"FAIL"<<endl;
        }
    }
}
`
            },
            {
                "id": 69,
                "title": "Cyclic Quadrilateral",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c,d;
        cin>>a>>b>>c>>d;
        if(a+c==180 && b+d==180){
            cout<<"YES"<<endl;
        }else{
            cout<<"NO"<<endl;
        }
    }
}
`
            },
            {
                "id": 70,
                "title": "Too many items",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        double a;
        cin>>a;
        cout<<ceil(a/10)<<endl;
    }
}
`
            },
            {
                "id": 71,
                "title": "Chef Fantasy 11",
                "code": `#include <bits/stdc++.h>
using namespace std;




int fact(int x){
    int y=1;
    while(x>0){
        y=x*y;
        x=x-1;
    }
    return y;
}
int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int x;
        cin>>x;
        cout<<fact(x)/fact(x-2)<<endl;
    }
}
`
            },
            {
                "id": 72,
                "title": "Building Race",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        float a,b,c,d;
        cin>>a>>b>>c>>d;
        if((a/b)>(c/d)){
            cout<<"Chefina"<<endl;
        }else if((a/b)<(c/d)){
            cout<<"Chef"<<endl;
        }else{
            cout<<"Both"<<endl;
        }
    }
}
`
            },
            {
                "id": 73,
                "title": "Chef and Races",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c,d;
        cin>>a>>b>>c>>d;
        set<int> s={a,b,c,d};
        int x=s.size();
        if(x==4){
            cout<<2<<endl;
        }else if(x==3){
            cout<<1<<endl;
        }else{
            cout<<0<<endl;
        }
    }
    
}
`
            },
            {
                "id": 74,
                "title": "Endless Appetizers",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        double a,b,c;
        cin>>a>>b>>c;
        int stick= a+(c/30);
        int plate= ceil(stick/b);
        cout<<plate<<endl;
    }

}
`
            },
            {
                "id": 75,
                "title": "Presents for Cheffina",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        int coin =a%5;
        if(a>=4){
            cout<<a-(a/5)<<endl;
        }else{
            cout<<a<<endl;
        }
        
    }
}
`
            },
            {
                "id": 76,
                "title": "Small Factorial",
                "code": `#include <bits/stdc++.h>
using namespace std;
long long fact(int x){
    long long y=1;
    while(x>0){
        y=x*y;
        x=x-1;
    }
    return y;
}
int main() {
    int n; 
    cin>>n;
    for(int i=0; i<n; i++){
       int a;
       cin>>a;
       cout<<fact(a)<<endl;
    }
}
`
            },
            {
                "id": 77,
                "title": "Dracula Eats",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        int x=a/7;
        if((a%7)>=2){
            x=x+1;
            cout<<x<<endl;
        }else if(x<2){
            cout<<x<<endl;
        }else if((a%7)<2){
            cout<<x<<endl;
        }
    }
}
`
            },
            {
                "id": 78,
                "title": "Possible Victory",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a,b,c;
    cin>>a>>b>>c;
    int o=20-b;
    int chance = o*6;
    int extraRun = chance*6;
    int Run=c+extraRun;
    if(Run>a){
        cout<<"YES"<<endl;
    }else{
        cout<<"NO"<<endl;
    }
}
`
            },
            {
                "id": 79,
                "title": "Chef And Operators",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        if(a>b){
            cout<<">"<<endl;
        }else if(a<b){
            cout<<"<"<<endl;
        }else{
            cout<<"="<<endl;
        }
    }
}
`
            },
            {
                "id": 80,
                "title": "Mutated Minions",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int x,y;
        cin>>x>>y;
        vector<int> v;
        for(int i=0; i<x; i++){
            int a;
            cin>>a;
            v.push_back((a+y));
        }
        int count=0;
        for(int val:v){
            if(val%7==0){
                count++;
            }
        }
        cout<<count<<endl;
        
    }
}
`
            },
            {
                "id": 81,
                "title": "Reach fast",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int count =0;
        int a,b,c;
        cin>>a>>b>>c;
        if(a==b){
            cout<<0<<endl;
        }else if(a<b){
            while(a<b){
                a=a+c;
                count++;
            }
            cout<<count<<endl;
        }else{
            while(a>b){
                b=b+c;
                count++;
            }
            cout<<count<<endl;
        }
    }
}
`
            },
            {
                "id": 82,
                "title": "Single-use Attack",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int h,x,y;
        cin>>h>>x>>y;
        int count=1;
        h=h-y;
        while(h>0){
            h=h-x;
            count+=1;
        }
        cout<<count<<endl;
    }
}
`
            },
            {
                "id": 83,
                "title": "Get Lowest Free",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        int x= min(a,b);
        int y=min(x,c);
        cout<<a+b+c-y<<endl;
    }
}
`
            },
            {
                "id": 84,
                "title": "Minimum number of Flips",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int x;
        cin>>x;
        int countA=0;
        int countB=0;
            for(int j=1; j<x+1; j++){
                int a;
                cin>>a;
                if(a==1){
                    countA++;
                }else{
                    countB++;
                }
            }
            if((countA>countB)&&(x%2==0)){
                    cout<<(x/2)-countB<<endl;
            }else if(countA<countB&&(x%2==0)){
                cout<<(x/2)-countA<<endl;
            }else{
                if(x%2!=0){
                    cout<<-1<<endl;
                }else{
                    cout<<0<<endl;
                }
            }
    }
}`
            },
            {
                "id": 85,
                "title": "Binary Battles",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a,b,c;
        cin>>a>>b>>c;
        int minute=0;
        while(a!=1){
            minute=(b + c) + minute;
            a=a/2;
        }
        cout<<minute -c<<endl;
    }
}
`
            },
            {
                "id": 86,
                "title": "Best of Two",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    int bob;
    int alice;
    for(int i=0; i<n; i++){
        int a,b,c,x,y,z;
        cin>>a>>b>>c>>x>>y>>z;
        vector<int> v={a,b,c};
        vector<int>s ={x,y,z};
        sort(v.begin(),v.end());
        alice=v[1]+v[2];
        sort(s.begin(),s.end());
        bob=s[1]+s[2];
    if(alice>bob){
        cout<<"Alice"<<endl;
    }else if(alice<bob){
        cout<<"Bob"<<endl;
    }else{
        cout<<"Tie"<<endl;
    }
    }
}
`
            },
            {
                "id": 87,
                "title": "The Lead Game",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int sumA = 0;
    int sumB = 0;
    int maxA = INT_MIN;
    int maxB = INT_MIN;
    vector<int> v(n);
    vector<int> s(n);

    for (int i =0; i<n; i++){
        cin>>v[i];
         cin>>s[i];
    }
    for(int i=1; i<n; i++){
        v[i]=v[i-1]+v[i];
        s[i]=s[i-1]+s[i];
        
    }
    for (int j=0;j<n;j++){
        if (v[j] > s[j]) {
            sumA += (v[j]-s[j]);
            maxA=max(maxA,(v[j]-s[j]));
        } else {
            sumB +=(s[j] - v[j]);
            maxB= max(maxB,(s[j]-v[j]));
        }
    }
    if (sumA > sumB) {
        cout<<1<<" "<<maxA<< endl;
    } else if (sumA < sumB) {
        cout <<2<<" "<< maxB <<endl;
    } else {
        cout<<0<<endl;
    }

}
`
            },
            {
                "id": 88,
                "title": "Degree of Polynomial",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    vector<int> v;
    for(int i=0; i<n; i++){
        int x;
        cin>>x;
        for(int j=0; j<n; j++){
            int a;
            cin>>v[i];
        }
        int y=v.size();
        for(int k=(y-1); k>0; k--){
            if(v[k]!=0){
                cout<<k<<endl;
            }else{
                cout<<0<<endl;
            }
        }
    }
}
`
            },
            {
                "id": 89,
                "title": "Recent contest problems",
                "code": `#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        vector<string> v(a);
        for(int i=0; i<a; i++){
            cin>>v[i];
        }
        int countS=0;
        int countL=0;
        for(string val:v){
            if(val=="START38"){
                countS++;
            }else{
                countL++;
            }
        }
        cout<<countS<<" "<<countL<<endl;
    }
}
`
            },
            {
                "id": 90,
                "title": "Primality Test",
                "code": `#include <bits/stdc++.h>
using namespace std;

void Prime(int num){
    int n=1;
    for(int i=2; i<num; i++){
        if(num%i==0){
            n=0;
            break;
        }
    }
    if(n==0){
        cout<<"no"<<endl;
    }else{
        cout<<"yes"<<endl;
    }
    
}





int main() {
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        int a;
        cin>>a;
        if(a==1){
            cout<<"no"<<endl;
        }else{
            Prime(a);
        }
    }
}
`
            },
            {
                "id": 91,
                "title": "The Cooler Dilemma 2",
                "code": `
#include <bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int count;
    for(int i=0; i<n; i++){
        int a,b;
        cin>>a>>b;
        if(b<a){
            cout<<0<<endl;
        }else{
            count=(b-1)/a;
            cout<<count<<endl;
        }
    }
}`
            }
        ]
;

    const examplesContainer = document.getElementById('examplesContainer');
    const modal = document.getElementById('exampleModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCode = document.getElementById('modalCode');
    const closeBtn = document.getElementsByClassName('close')[0];
    const copyButton = document.getElementById('copyButton');

    function createExampleCard(example) {
        const card = document.createElement('div');
        card.className = 'example-card';
        card.innerHTML = `<h3>${example.title}</h3>`;
        card.addEventListener('click', () => openModal(example));
        return card;
    }

    function openModal(example) {
        modalTitle.textContent = example.title;
        modalCode.textContent = example.code;
        Prism.highlightElement(modalCode);  // Syntax highlighting for C++
        modal.style.display = 'block';
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    copyButton.onclick = function() {
        navigator.clipboard.writeText(modalCode.textContent).then(() => {
            alert('Code copied to clipboard!');
        });
    }

    codeExamples.forEach(example => {
        examplesContainer.appendChild(createExampleCard(example));
    });

    // Gradient animation
    const gradientBg = document.querySelector('.gradient-bg');
    let angle = 0;

    function animateGradient() {
        angle = (angle + 1) % 360;
        gradientBg.style.background = `
            linear-gradient(
                ${angle}deg,
                var(--gradient-1),
                var(--gradient-2),
                var(--gradient-3)
            )
        `;
        requestAnimationFrame(animateGradient);
    }

    animateGradient();
});
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === "#examples") {
        history.replaceState(null, null, " "); // Clear the hash in the URL
    }
});
