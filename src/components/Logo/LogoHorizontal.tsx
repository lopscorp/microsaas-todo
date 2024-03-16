import React, { ComponentPropsWithRef } from "react";

type Logoprops = ComponentPropsWithRef<"svg">;

export function Logohorizontal({ ...rest }: Logoprops) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="394"
      height="119"
      fill="none"
      viewBox="0 0 394 119"
      {...rest}
    >
      <path
        fill="#0488A3"
        d="M127.793 75.874h12.891v3.237h-16.488V39.175h3.597v36.699zM152.932 76.922c-2.698-1.714-4.839-4.142-6.381-7.236-1.542-3.094-2.356-6.616-2.356-10.52 0-3.902.771-7.425 2.356-10.519 1.542-3.094 3.683-5.521 6.381-7.235 2.698-1.714 5.739-2.618 9.036-2.618 3.298 0 6.381.857 9.079 2.618 2.698 1.714 4.84 4.141 6.381 7.235 1.542 3.094 2.313 6.617 2.313 10.52 0 3.903-.771 7.425-2.313 10.52-1.541 3.093-3.683 5.521-6.381 7.235-2.698 1.713-5.738 2.618-9.079 2.618-3.34 0-6.338-.857-9.036-2.618zm16.231-2.952c2.141-1.38 3.812-3.332 5.054-5.902 1.241-2.57 1.841-5.57 1.841-8.949 0-3.38-.6-6.378-1.841-8.901-1.242-2.57-2.913-4.522-5.054-5.903-2.141-1.38-4.54-2.046-7.195-2.046-2.655 0-5.053.666-7.195 2.047-2.141 1.38-3.811 3.332-5.053 5.902-1.242 2.57-1.842 5.521-1.842 8.901s.6 6.379 1.842 8.949c1.242 2.57 2.912 4.522 5.053 5.902 2.142 1.38 4.54 2.047 7.195 2.047 2.655 0 5.054-.666 7.195-2.047zM206.293 58.976c-2.013 2.095-5.053 3.142-9.079 3.142h-7.237v17.04h-3.598V39.223h10.835c4.026 0 7.024 1.047 9.079 3.142 2.056 2.094 3.041 4.855 3.041 8.33 0 3.475-1.028 6.188-3.041 8.282zm-.685-8.282c0-2.666-.685-4.665-2.013-6.045-1.327-1.38-3.469-2.047-6.424-2.047h-7.237V58.69h7.237c5.611 0 8.437-2.666 8.437-7.997zM219.998 78.16c-1.799-.905-3.212-2.19-4.24-3.809-1.028-1.618-1.585-3.475-1.628-5.474h3.812a8.213 8.213 0 002.313 5.093c1.37 1.476 3.383 2.19 5.995 2.19 2.441 0 4.368-.714 5.782-2.094 1.413-1.38 2.141-3.142 2.141-5.284 0-1.714-.385-3.094-1.199-4.141-.771-1.048-1.756-1.81-2.912-2.333-1.157-.523-2.784-1.094-4.84-1.666-2.398-.714-4.282-1.428-5.695-2.094-1.414-.666-2.613-1.761-3.598-3.19-.985-1.427-1.499-3.426-1.499-5.902 0-2.047.471-3.903 1.456-5.521.942-1.619 2.313-2.904 4.069-3.808 1.756-.905 3.768-1.38 5.995-1.38 3.341 0 5.996.904 8.052 2.712 2.055 1.81 3.212 4.142 3.511 6.998h-3.897c-.257-1.619-1.028-3.094-2.398-4.38-1.37-1.285-3.212-1.904-5.567-1.904-2.142 0-3.94.62-5.396 1.904-1.457 1.286-2.142 3-2.142 5.236 0 1.666.386 3.047 1.199 4.046.814 1 1.756 1.81 2.955 2.333 1.2.523 2.784 1.095 4.797 1.714 2.313.714 4.197 1.428 5.653 2.142 1.456.713 2.655 1.76 3.64 3.236.985 1.428 1.499 3.38 1.499 5.807 0 1.857-.428 3.618-1.328 5.332-.899 1.666-2.226 3.046-3.94 4.046-1.755 1.047-3.854 1.523-6.252 1.523-2.398 0-4.454-.476-6.253-1.38l-.085.047zM244.323 48.171c1.456-3.141 3.554-5.569 6.252-7.283 2.698-1.713 5.91-2.618 9.551-2.618 3.169 0 5.952.667 8.436 1.952 2.484 1.333 4.497 3.19 6.082 5.57 1.541 2.38 2.612 5.188 3.126 8.377h-12.034c-.557-1.333-1.328-2.38-2.356-3.094-1.027-.762-2.184-1.095-3.468-1.095-1.928 0-3.427.81-4.54 2.38-1.114 1.618-1.67 3.76-1.67 6.474 0 2.713.556 4.855 1.67 6.473 1.113 1.619 2.612 2.38 4.54 2.38 1.284 0 2.441-.38 3.468-1.095 1.028-.761 1.799-1.76 2.356-3.094h12.034c-.514 3.19-1.542 5.998-3.126 8.378-1.542 2.38-3.598 4.236-6.082 5.57-2.484 1.332-5.31 1.95-8.436 1.95-3.683 0-6.853-.856-9.551-2.617-2.698-1.714-4.796-4.141-6.252-7.283-1.456-3.142-2.184-6.664-2.184-10.662 0-3.999.728-7.569 2.184-10.663zM290.19 76.874c-2.87-1.809-5.14-4.284-6.81-7.426-1.67-3.141-2.527-6.711-2.527-10.662 0-3.95.857-7.52 2.527-10.663 1.67-3.141 3.94-5.616 6.81-7.377 2.869-1.762 5.995-2.666 9.421-2.666 3.426 0 6.553.904 9.422 2.666 2.869 1.76 5.096 4.236 6.767 7.377 1.67 3.142 2.483 6.712 2.483 10.663 0 3.95-.813 7.52-2.483 10.662-1.671 3.142-3.94 5.617-6.767 7.426-2.869 1.809-5.996 2.666-9.379 2.666-3.383 0-6.552-.905-9.422-2.666h-.042zm14.689-11.567c1.242-1.618 1.841-3.808 1.841-6.521s-.599-4.998-1.841-6.616c-1.242-1.619-2.998-2.428-5.225-2.428-2.227 0-4.068.81-5.31 2.428-1.242 1.618-1.842 3.807-1.842 6.616 0 2.808.6 4.903 1.842 6.521 1.242 1.618 2.998 2.428 5.31 2.428 2.313 0 4.026-.81 5.225-2.428zM340.682 79.159l-6.853-14.518h-.042v14.518h-11.392v-40.46h16.959c2.955 0 5.482.57 7.537 1.76 2.099 1.143 3.641 2.762 4.711 4.76 1.071 2 1.585 4.237 1.585 6.76 0 2.713-.685 5.093-2.013 7.188-1.371 2.094-3.298 3.617-5.824 4.522l7.922 15.47h-12.59zm-6.895-22.944h4.539c1.114 0 1.927-.285 2.484-.809.557-.523.814-1.428.814-2.618 0-1.047-.3-1.904-.857-2.522-.557-.62-1.37-.905-2.441-.905h-4.539v6.855zM384.964 59.5c-1.071 2.094-2.613 3.713-4.711 4.95-2.056 1.238-4.583 1.81-7.538 1.81h-4.539V79.11h-11.392v-40.46h15.931c4.454 0 7.88 1.238 10.236 3.76 2.355 2.523 3.554 5.903 3.554 10.092 0 2.57-.513 4.855-1.584 6.95l.043.047zm-9.979-6.95c0-2.475-1.199-3.712-3.554-3.712h-3.255v7.425h3.255c2.355 0 3.554-1.237 3.554-3.713z"
      ></path>
      <path
        fill="#4D6F80"
        d="M102.387 64.052c-.944-1.997-2.466-3.418-3.882-4.941-1.477-1.574-3.076-3.012-4.811-4.214-1.523-1.066-2.847-2.42-4.385-3.468-1.294-.863-2.573-1.845-3.989-2.42-1.598-.66-3.273-.93-4.902-.085-1.126.592-1.903 2.166-1.568 3.858.107.525.244 1.032-.015 1.574-.152.321 0 .694.183 1.032.578 1.015 1.537 1.422 2.45 1.777 2.68 1.032 5.451 1.117 8.252.998.244 0 .487-.034.716-.17.624-.388 1.263-.473 1.948-.27.061.017.138.034.183.017 1.081-.305 1.842.203 2.406 1.185.091.169.182.236.35.22 1.05-.153 1.598.609 2.116 1.421.183.254.35.44.624.575 1.05.525 1.903 1.286 2.345 2.505.045.135.106.304.182.338 1.081.423 1.431 1.54 1.964 2.488.061.101.107.186.229.186v-1.506c-.396-.237-.229-.745-.396-1.1zm-14.235-7.903c-1.674-.49-3.44-.66-5.085-1.37-.852-.372-1.69-.745-2.39-1.405-.259-.236-.7-.524-.472-.913.213-.372.7-.186 1.081-.119.015 0 .03.017.061.017 1.066.592 2.131 1.185 3.228 1.726.928.457 1.903.846 2.877 1.218.7.271 1.477.356 2.116.88-.472.068-.944.102-1.416-.033zM41.75 8.855c-.168-.558-.32-1.117-.336-1.71 0-.253.046-.507.061-.744.015-.253.411-.355.228-.643a1.68 1.68 0 00-.867-.71c-.213-.068-.442-.085-.594-.288h-1.736c-.32.423-.837.305-1.248.575-1.599 1.016-3.182 2.048-4.491 3.52-.198.22-.38.457-.518.728-.533 1.032.046 1.472 1.096 1.709.746.169 1.538.338 2.284-.288.274-.254.761-.152 1.111.101.564.407 1.127.373 1.736.136a25.05 25.05 0 012.68-.88c.502-.136.791-.846.593-1.506zm-4.005-.88c-.533.677-1.248 1.032-1.948 1.421-.381.203-.792.576-1.34.373.487-.711 1.126-1.185 1.75-1.676.381-.304.792-.643 1.325-.609.122 0 .29-.084.35.136.03.152-.06.237-.137.355zM54.644 114.037c.106-.068.213-.136.35-.22-.457-.423-1.066-.542-1.446-1.032-.076-.102-.183-.17-.244-.288-.304-.541-.609-1.032-1.127-1.404-.41-.288-.547-.931-.593-1.506-.03-.356-.153-.491-.442-.627-.837-.372-1.233-1.082-1.157-1.996.03-.406-.091-.677-.335-.863-.76-.576-.99-1.405-.928-2.352.03-.491-.107-.576-.518-.745-1.02-.389-2.086-.626-3.06-1.15-.046-.017-.107 0-.213 0 1.324 2.419 2.558 4.873 3.973 7.191 1.02 1.641 2.162 3.215 3.593 4.484.29.254.7.136.914.508h1.233zM4.283 66.793c1.355-.457 2.694-.372 4.05 0a9.46 9.46 0 012.435 1.032c.244.153.579.17.685-.169.198-.575.305-1.286-.06-1.76-.777-.998-1.69-1.827-2.985-1.878-.67-.034-1.202.237-1.598.812-.305.44-.61.745-1.157.745-.579 0-1.02.423-1.37.93V66.793zM61.053 67.538c-.837-.846-1.43-1.879-1.979-2.945-.624-1.235-1.31-2.436-2.283-3.333-.518-.474-1.142-.795-1.751-1.1-1.127-.575-2.101-1.303-2.74-2.521-.275-.508-.762-.576-1.355-.271-1.447.761-2.482 2.014-3.335 3.469-.578 1.015-.898 2.115-1.08 3.282-.046.22-.107.44-.183.711-.305-.338-.305-.694-.29-1.049.137-3.181 1.523-5.5 3.944-7.124 1.72-1.167 3.638-1.523 5.678-1.675-.335-.508-.807-.744-1.218-.998a61.04 61.04 0 01-5.39-4.061c-1.415-1.185-2.861-2.335-4.307-3.486-.442-.338-.731-.897-1.097-1.354-1.43-1.76-2.664-3.706-4.354-5.195-1.294-1.15-2.68-2.064-4.247-2.588-2.162-.728-4.02-.085-5.405 1.895-.457.676-.441 1.54-.441 2.369-.016 1.235.259 2.436.35 3.655.015.203-.076.913.533.423.137-.119.167.253.137.406-.076.643.122 1.269.137 1.895.015.677.38 1.201.548 1.912.183-.305.304-.541.441-.761.061-.119.122-.271.274-.203.152.05.107.22.107.355 0 .575-.137 1.15-.076 1.76.122 1.421.837 2.504 1.568 3.62.304-.338.655-.54 1.035-.71.107.322-.137.372-.183.525-.121.355-.243.592.244.896 1.492.914 2.649 2.234 3.227 4.095.092.305.244.576.381.897.335-.338.594-.44.716.186.045.271.274.44.532.508 2.101.558 3.791 1.861 5.161 3.672.244.321.457.728.549 1.134.121.592.258 1.083.776 1.404.959.592 1.385 1.624 1.675 2.724.09.339.243.593.472.779.76.626 1.537 1.235 2.45 1.624.457.203.884 0 1.325.102 1.188.22 2.451.237 3.486.947.899.626 1.706.356 2.558.17.579-.136 1.142.05 1.705.101.152.017.366.17.457 0 .122-.237-.137-.27-.259-.372-.046-.034-.06-.102-.106-.153-.472-.71-.944-1.116-1.873-.795-1.02.339-2.101 0-3-.575-.852-.542-1.841-.846-2.618-1.71.868.102 1.538.593 2.193 1 1.34.794 2.664 1.065 4.11.49a14.378 14.378 0 002.39-1.27c.411-.253.761-.66.96-1.116.304-.71-.138-1.235-.549-1.641zm-29.52-22.32c.046.119.153.237.031.424-.304-.356-.456-.762-.396-1.202.168-1.133.427-2.2 1.37-2.893.214-.153.564-.44.457-.643-.167-.356-.441.033-.67.101-.06.017-.121.051-.182.051-.244 0-.518.355-.716-.034-.152-.304.107-.541.229-.795a.607.607 0 01.228-.22c.99-.66 2.055-.948 3.227-.863.503.034.214.592.457.846.061.068-.32.118-.517.135-.457.017-.93.017-1.234.643 1.705-.27 3.289-.304 4.811.711-.213.17-.32.05-.426 0-2.39-.863-4.491-.406-6.272 1.608-.472.541-.67 1.42-.396 2.132zm1.752 5.263c.06.118.258.254.09.406-.106.102-.212 0-.288-.135-.67-1.202-.975-2.454-.564-3.875.213-.745.7-1.32.929-2.03.122-.39.73-.711.38-1.084-.258-.27-.639.339-.989.491-.183.068-.335.339-.548.17-.198-.153-.152-.44-.107-.694.03-.254.137-.457.305-.643.944-.982 2.131-1.168 3.319-1.371.289-.05.532.17.76.372.244.203.305.423.031.66-.441.406-.883.795-1.507.779-.487-.017-1.08.66-1.065 1.184 1.872-1.134 3.806-1.641 5.876-.863v.22c-.578 0-1.157.034-1.72-.017-.624-.05-1.157.22-1.72.423-.625.22-1.173.61-1.782.88-.457.22-.898.457-1.218.863-.974 1.269-1.02 2.724-.182 4.264zm.776-3.063c-.259-.287-.107-.676.137-1.015.913-1.218 2.177-1.37 3.593-1.59.487-.339.198.473.457.609.426.236.137.44-.092.541-.761.322-1.507.66-2.085 1.337-.137.152-.396.321-.366-.152.03-.407-.152-.339-.365-.237-.168.101-.335.186-.472.321-.244.254-.594.44-.807.186zm1.416 2.962s-.137.135-.183.22c-.64 1.049-.685 2.115-.106 3.198.09.152.167.304.076.49-.807-.778-.99-2.436-.67-3.435.487-1.472 1.355-2.555 2.618-3.248 1.112-.593 2.3-.863 3.654-.61-.761.44-1.598.288-2.36.897h1.096c.107 0 .35.034.29.136-.274.456.32.422.304.761-.776.49-1.69.795-2.39 1.506-.106.118-.243.135-.304-.119-.061-.355-.29-.203-.472-.152-.518.119-.883.999-1.553.356zm3.303 2.368c-1.233.88-1.674 2.251-1.324 3.825.137.575.502.964.624 1.54-.472-.373-.868-.846-1.05-1.456-.594-1.912.563-4.095 1.979-5.364 1.263-1.133 2.71-1.76 4.308-1.996.792-.119 1.599-.339 2.406 0-.107.27-.29.22-.442.253-1.31.339-2.618.576-3.836 1.303-.929.576-1.766 1.252-2.665 1.895zm.396 2.048c-.213-.237.03-.525.092-.761.015-.119.137-.203.213-.322.335-.541.898-.761 1.37-1.1.868-.66 1.933-.592 2.71.17.213.22.213.372-.076.473-1.066.406-1.995 1.05-2.893 2.03v-.355c.03-.236.411-.423.152-.643-.182-.169-.456.051-.654.187-.076.05-.122.135-.198.169-.229.067-.457.423-.716.152zm.944 5.787c-.441-.288-.594-.61-.487-1.303.183-1.354.64-2.589 1.507-3.57 2.116-2.437 4.78-3.554 7.78-3.807.137-.017.304-.051.365.186-.578.304-1.218.203-1.796.423-1.462.541-2.802 1.286-4.096 2.182-1.964 1.388-3.334 3.13-3.273 5.889zm3.045 1.066c-.487-1.489.091-2.555.655-3.604.152-.288.32-.559.243-.93-.38-.035-.533.32-.776.507-.229.186-.472.44-.761.169-.244-.237-.198-.575-.077-.88.077-.17.153-.338.26-.474.897-.964 1.948-1.573 3.196-1.793.137-.017.35-.034.35.152-.045.897.488.457.746.372.549-.169 1.05-.524 1.599-.677.807-.203 1.553-.727 2.558-.676-.518.456-1.02.473-1.477.676-1.279.542-2.451 1.337-3.486 2.302-1.355 1.269-2.878 2.436-3.03 4.856zm2.755-1.37c.092-.288.564-.627.244-.847-.335-.236-.441.39-.7.576-.015.017-.015.05-.03.05-.199.254-.381.677-.716.508-.396-.186-.183-.677-.168-1.049.016-.119.107-.237.168-.355.563-1.066 1.461-1.743 2.375-2.386.472-.356.746.135.99.355.243.203-.077.474-.26.694-.776.88-1.446 1.827-1.552 3.13-.016.22-.168.356-.411.491-.153-.44-.061-.795.06-1.168zm9.5 2.47c-.091.27-.365.338-.624.355-.243 0-.472-.084-.7-.203-.96-.558-1.507-1.557-2.116-2.487-.183-.27-.35-.677-.32-.998.046-.424.853-.508 1.188-.153.197.203.334.457.547.626.472.372.975.71 1.477 1.083-.228.152-.548-.017-.64.27-.106.34.29.322.397.526.076.203.274.253.41.389.183.152.503.27.381.592zm4.826 7.175c-.106.169-.289.169-.38-.051-.198-.457-.548-.897-.259-1.456.076-.186.076-.355-.046-.507-.121-.152-.182-.305-.03-.474.152-.152.32-.186.517-.085.488.237.792.627.762 1.287.045.524-.29.896-.564 1.285z"
      ></path>
      <path
        fill="#4D6F80"
        d="M62.682 111.042c-.29-.626-.868-.795-1.355-1.1-1.324-.778-2.542-1.726-3.684-2.809-1.172-1.117-2.284-2.301-3.288-3.587-.579-.745-.975-1.591-1.05-2.538-.107-1.286-.397-2.488-.701-3.706a32.882 32.882 0 00-1.538-4.704c-.685-1.71-1.644-3.097-2.892-4.129.015.186.03.39.03.592 0 .423-.06.846-.198 1.252.259.373.411.813.472 1.337.03.22.122.39.213.559.38.626.807 1.235 1.112 1.929a35.056 35.056 0 011.461 3.993c.061.17.137.39 0 .508-.152.152-.35.05-.502-.085a9.173 9.173 0 01-1.934-2.47c-.137-.237-.335-.44-.365-.779-.061-.727-.457-1.235-1.05-1.54A2.877 2.877 0 0146.3 92.65c-.06.034-.122.084-.183.118-.67.39-1.476.592-2.405.592-.929 0-1.69-.169-2.375-.524a4.085 4.085 0 01-1.66-1.506c-.015-.017-.03-.051-.045-.068l-.03.237c-.107 1.015.273 1.895.624 2.741.7 1.675 1.476 3.334 2.481 4.823.837 1.269 1.812 2.318 3.273 2.606.61.135 1.188.44 1.843.49.76.051 1.278.677 1.78 1.219.777.829 1.767 1.336 2.543 2.166a1.9 1.9 0 01.305.406c.304.541.532 1.201 1.309 1.015.137-.051.38.068.487.203.594.778 1.583.711 2.208 1.286.852.812 2.024.964 2.785 1.878.381.457.792.559 1.34.592.548.034 1.081.373 1.553.728.183.135.396.389.563.22.198-.203.122-.558-.015-.829zM46.15 86.828c-.244-.305-.411-.677-.761-.846-1.523.846-1.827 1.607-2.284 1.692-1.279.084-2.466.507-3.045 1.692-.091.186-.06.615 0 .846.107.406.369.778.689 1.117.41.44 2.295 1.32 3.117 1.32.716 0 2.284.101 3.045-.745.761-.846.73-1.489.761-1.692 0-1.633 0-1.692-.761-2.538-.573-.637-.533-.542-.761-.846zM84.422 63.747c-.243-.287-.548-.558-.898-.626-.41-.084-.654-.321-.883-.66-.472-.694-1.126-1.049-1.888-.829-.852.27-1.735.525-2.42 1.202-.183.169-.274.118-.396-.068-.411-.694-.944-1.235-1.446-1.845-.29-.338-.61-.609-1.066-.592-.198.017-.396.017-.259-.321.122-.288-.03-.474-.213-.643a16.02 16.02 0 00-2.116-1.574c-.137-.101-.335-.203-.457-.152-.7.237-.64-.254-.624-.745.015-1.286-.761-1.963-1.66-2.521-.365-.237-.76-.474-1.187-.541-1.355-.254-1.98.253-2.284 1.928-.32 1.879-.289 3.808-.228 5.72.061 1.37.076 2.724.548 4.044.229.643.426 1.201 1.157 1.235.365 0 .73.102 1.096.186.503.102.822-.135 1.036-.609.624-1.32.943-2.758 1.126-4.196.137-1.066.32-2.115.396-3.181.015-.136.015-.288.198-.288.152.017.228.152.29.304.334.694.7 1.422 1.263 1.879.548.44.913 1.032 1.385 1.523.563.626 1.264 1.1 1.949 1.573.41.288.852.17 1.34-.186-.107.779.152.728.624.559 1.766-.643 3.547-.762 5.359-.153.121.034.258.237.365.017.076-.135 0-.321-.107-.44zm-15.726-7.14c-.29.203-.396.49-.411.846-.015.524-.061 1.049-.107 1.573-.015.254-.06.576-.304.61-.305.033-.274-.339-.305-.559-.06-.457-.091-.914-.121-1.37-.077-.914.197-1.76.41-2.606.092-.356.335-.745.716-.745.426.017.487.474.563.863.092.541.03 1.05-.441 1.387zm7.216 5.431c-.274-.135-.533-.304-.594-.507-.06-.288.03-.39.122-.373.335.068.487.406.655.694.046.102-.091.237-.183.186zM54.279 13.12c-.823-1.202-1.964-1.947-3.06-2.793-1.188-.897-2.421-1.726-3.624-2.589-1.263-.913-2.557-1.76-4.095-1.929-.259-.034-.487-.067-.746-.017-.822.203-.914.322-.898 1.71.045.642.548 1.522 1.02 2.42.715 1.437 1.903 2.368 3.044 3.333 1.447 1.252 2.923 2.47 4.37 3.722.7.593 1.872.61 2.588-.017.563-.474 1.08-.998 1.492-1.658.41-.66.365-1.54-.091-2.183zm-1.05 2.165c-.138.17-.336.288-.534.068-.64-.66-1.553-1.134-1.598-2.25-.03-.83-.533-1.1-1.05-1.185-1.889-.254-2.68-2.03-3.868-3.249 2.086.981 4.02 2.2 5.785 3.723.61.524 1.218 1.066 1.477 1.946.107.355 0 .676-.213.947zM65.864 65.812c-1.416-1.218-1.994-3.046-2.786-4.704-.73-1.506-1.827-2.538-3.167-3.317-.746-.44-1.446-.93-2.192-1.32-1.538-.761-3.106-.947-4.628.085-.29.186-.335.321-.335.508.091.778.426 1.269.974 1.64 1.127.762 2.3 1.388 3.41 2.184.93.66 1.416 1.709 1.934 2.707.73 1.421 1.522 2.775 2.558 3.943.624.694 1.507.829 2.299.44.715-.356 1.355-.796 1.872-1.456.198-.236.29-.507.061-.71zm-8.54-6.43c-.183.203-.427.27-.777.287-.746-.203-1.523-.575-2.116-1.286-.137-.169-.427-.321-.229-.609.153-.254.396-.118.625-.118.913.034 1.522.913 2.42 1.049.35.068.32.423.076.677zm6.028 8.037c-.274.119-.563.136-.822-.067-1.111-.83-1.736-2.03-2.208-3.537.305.22.396.423.503.61.502.947 1.187 1.657 2.1 2.097.244.119.518.187.564.542.03.135-.046.305-.137.355zM68.894 41.208c-.198-.135-.411-.169-.655-.152-.517 0-.99-.05-1.492-.39-.928-.625-1.69-.44-2.512.475-.32.355-.624.727-.837 1.167-.259.575-.533.542-.96.22-.654-.49-1.263-1.15-2.04-1.421-.532-.187-.974-.508-1.46-.779-.838-.49-1.782-.795-2.772-.643-.304.051-.487 0-.624-.321-.167-.406-.517-.525-.867-.457-1.036.186-2.025.525-3.015.897-.852.338-1.705.727-2.542 1.133-.427.22-.899.491-.274 1.134-1.127-.034-1.325.153-1.188 1.388.153 1.252.411 2.504.548 3.756.183 1.642 1.218 2.352 2.238 3.13.183.12.305.576.563.356.122-.102.046-.508.061-.778.122-1.557-.137-3.097-.41-4.603-.153-.846-.518-1.675-1.112-2.318-.091-.102-.228-.22-.137-.406.06-.136.213-.085.335-.068 1.553.152 3.106-.034 4.628-.423.563-.152 1.203-.355 1.386-1.167.06-.271.182-.204.365-.102.578.338 1.066.83 1.614 1.218.41.322.852.677 1.263-.152.061.761.335 1.167.914 1.404.776.322 1.522.762 2.344.982.396.101.746.118.807-.474.213 0 .29.203.396.339.228.27.41.27.654 0 1.112-1.151 2.421-1.879 3.883-2.302.258-.068.532-.084.791-.135.122 0 .32.084.35-.152.03-.17-.137-.254-.243-.356zm-19.959 3.909a.225.225 0 01-.228.186c-.107 0-.198-.068-.213-.203-.092-.541-.335-1.066-.305-1.641 0-.186-.046-.474.168-.525.197-.034.38.17.456.39.107.355.198.727.198 1.116-.03.237-.03.457-.076.677zm3.334-4.687c-.64.66-1.675.524-2.192 1.472-.137.237-.502.034-.655-.254-.137-.288.03-.524.259-.575.898-.203 1.736-.575 2.725-.897-.091.186-.106.237-.137.254zm5.374.321c.396.17.746.305 1.096.457-.456.27-.715.17-1.096-.457zm2.269 1.371c-.137-.017-.305-.102-.29-.288.016-.22.214-.237.381-.237.563 0 .868.457 1.325.965-.579-.203-.975-.39-1.416-.44zm5.998-.71c-.518.22-1.066.32-1.522.727.334-.592.745-1.066 1.37-1.219.137-.016.32-.067.38.085.092.203-.076.339-.228.406zM31.077 54.796c-.137-.61-.503-1.1-.868-1.523-1.157-1.286-2.481-2.369-3.867-3.333-.624-.457-1.218-.965-1.948-1.219-.229-.067-.472-.321-.548.17-.016.118-.107.152-.183.118-.837-.49-1.462.17-2.07.575-2.086 1.388-4.005 3.03-5.816 4.84-.213.22-.335.507-.442.795-.213.61-.137.728.426.66.381-.05.533.186.686.525.548 1.167.867 1.235 1.857.49 1.264-.964 2.192-2.284 3.227-3.486.792-.913 1.584-1.827 2.101-2.978.061-.118.137-.22.26-.456.167.473.106.71.075.964-.076.71.152 1.303.625 1.76 1.309 1.32 2.831 2.233 4.445 3.012.213.101.411.27.64.372.38.186.837.372 1.172.068.32-.322.334-.863.228-1.354zm-11.281-2.014c-.716.796-1.492 1.54-2.147 2.403-.152.203-.502.559-.7.355-.29-.27.06-.575.213-.862.107-.203.29-.271.457-.305.259-.034.426-.203.609-.39.578-.54 1.05-1.234 1.796-1.59-.076.136-.137.27-.228.39zm8.495-.152c-.38-.288-.807-.61-1.248-.694-1.036-.203-1.645-.964-2.238-1.793-.092-.119-.274-.271-.107-.474.137-.17.29-.102.442-.017 1.461.863 2.679 2.098 3.973 3.232-.305-.017-.563-.068-.822-.254zM56.7 75.22c-.945-1.252-2.27-1.49-3.579-1.828-.289-.084-.593-.101-.898-.186-2.253-.525-4.521-.744-6.82-.39-.122.018-.274-.05-.335.102-.061.203.122.271.228.373.777.71 1.386 1.54 1.553 2.724.198 1.388 1.111 2.115 2.253 2.25 1.249.136 2.497.254 3.487.356.928-.525 2.01-.762 3.181-.762.32 0 .64 0 .93.068.76-.677.639-1.844 0-2.707zm-2.543-.271a14.829 14.829 0 01-2.588-.44c-.944-.237-1.95-.17-2.878-.525.107-.22.29-.186.442-.22 1.75-.253 3.456-.135 5.115.542.213.085.472.152.457.39-.03.338-.35.27-.548.253zM43.285 75.16c-1.275.811-1.719 2.219-2.25 3.591-.125.302-.194.632-.323.95-.862 2.373-1.456 4.816-1.547 7.394-.006.136-.093.29.03.384.17.102.262-.086.37-.184.767-.725 1.609-1.245 2.687-1.219 1.264.028 2.07-.843 2.39-2.068.34-1.342.666-2.687.93-3.752.534-1.885.534-2.061.534-3.299-.159-.707-.159-.883-.423-1.32-.69-.977-1.521-1.025-2.398-.478zm-.688 2.733c-.216.954-.501 1.86-.846 2.754-.376.991-.494 2.102-.972 3.056-.176-.156-.114-.35-.117-.522.084-1.96.49-3.805 1.382-5.501.112-.218.218-.49.425-.431.294.093.178.43.128.644zM31.99 19.972c-1.065.136-2.085.051-3.06-.592-.471-.322-.883.135-1.202.508-.472.541-.457 1.235-.411 1.793-.046 1.422.259 2.657.41 3.91.092.913.138 1.843.549 2.69.29.609.715.981 1.31.846.623-.119 1.202-.406 1.735-.779.137-.101.304-.304.304-.473.03-.728.457-.965.96-1.151.35-.119.471-.355.532-.779.168-1.252.426-2.487.67-3.722.259-1.37-.548-2.403-1.796-2.25zm-1.461 6.921h-.152v-2.454c0-.846-.046-1.692-.061-2.538 0-.22.015-.474.32-.457.228 0 .258.153.258.356-.015 1.709-.228 3.4-.365 5.093zm2.162-3.435c-.259.288-.366.237-.487-.152-.198-.66.121-1.303-.061-1.946-.03-.152.091-.305.274-.305.122 0 .213.085.32.17.548.49.517 1.624-.046 2.233zM57.43 18.72c-.259-.965-.73-1.624-1.66-1.81-.228-.051-.548-.136-.654-.322-.38-.66-.685-.39-1.05 0-.153.152-.35.237-.534.321-.639.305-1.37.542-.959 1.642.061.152-.045.457-.197.524-1.051.457-1.005 1.557-1.173 2.488-.198 1.218.046 2.42.305 3.62.32 1.558 1.02 2.827 2.04 3.91.396.44.867.761 1.477.913-.35-.524-.731-1.015-1.02-1.573-.625-1.15-.731-2.59.106-3.74.396-.575 1.02-.846 1.568-1.1 1.888-.812 2.192-3.232 1.75-4.873zm-.563 2.183c.03.88-.442 1.472-.914 2.064-.091.119-.198.17-.335.119-.152-.051-.106-.22-.122-.339v-1.844c-.593.135-.517.947-1.11 1.134.212-1.151.7-2.166.639-3.3-.016-.152.076-.254.213-.27.197-.035.258.084.274.27.03.22.091.44.335.406.228-.034.106-.288.137-.457.03-.203-.077-.508.197-.575.275-.051.366.203.488.44.35.761.152 1.557.198 2.352z"
      ></path>
      <path
        fill="#4D6F80"
        d="M34.64 12.273c-.93-.27-1.828-.61-2.634-1.202-.061-.05-.183-.084-.198-.152-.183-.846-.716-.71-1.249-.541-.548.169-.913.693-.99 1.184-.334 1.98-.547 3.994-.79 5.821-.016 1.641.745 2.335 2.04 2.014.67-.17 1.339-.322 1.826-.931a.584.584 0 01.244-.203c1.811-.71 2.253-2.572 2.8-4.281.305-.914-.167-1.438-1.05-1.71zm-.99 1.184a219.753 219.753 0 00-1.386 4.535c-.076.22-.137.406-.365.339-.29-.102-.167-.356-.076-.559.396-.88.807-1.743.472-2.826.152-.676.183-1.438.746-1.98.213-.202.457-.202.67-.05.243.186-.015.355-.061.541zM77.297 49.652c-.472-.237-.99-.271-1.507-.271-2.162.254-4.263.761-6.166 1.963-.654.406-.654 1.337.016 1.929.502.457 1.02.93 1.492 1.455.045.068.152.102.167.17.244.964.807.862 1.477.66.99-.305 1.994-.085 2.999.067.441.05.898.05 1.34.068.517.017.776-.305.776-.83.015-1.303.152-2.588.259-3.891.046-.694-.335-1.066-.853-1.32zm-2.71 1.675c-.76-.085-1.461.186-2.04.626-.41.322-.776.355-1.233.338a.619.619 0 01-.64-.524c-.06-.305.214-.457.458-.542 1.476-.524 2.968-.812 4.567-.22-.38.322-.746.356-1.111.322zM33.71 32.29h-.014v-1.843c0-1.236-.96-1.98-1.98-1.456-.806.423-1.644.474-2.512.423a1.613 1.613 0 01-.471-.118c-.61-.305-1.218.05-1.432.744-.228.745-.152 1.456.046 2.15a44.49 44.49 0 001.37 4.196c.32.812 1.112 1.455 2.07.964.35-.203.762-.287 1.143-.456.334-.136.67-.288.685-.813.015-.372.32-.609.578-.761.426-.254.548-.61.533-1.1-.015-.643-.015-1.286-.015-1.93zm-3.5.508c-.29.271-.305.576-.199.914.29.863.137 1.692-.015 2.572-.183-.084-.198-.203-.228-.304-.32-1.219-.26-2.47-.29-3.723 0-.355.016-.727.046-1.083.046-.338.29-.49.533-.61.122-.067.228 0 .305.12.121.202.03 1.962-.153 2.114zm2.146.745c-.213-.558.03-1.15-.213-1.658-.183-.373-.061-.66.045-.965.061-.152.137-.304.305-.304.182 0 .228.169.274.321.304.948 0 1.794-.411 2.606zM42.982 64.035c-1.096-1.032-2.405-1.641-3.669-2.335-.259-.136-.594-.288-.791.152-.122.27-.244.068-.32-.034-.807-1.286-2.131-1.607-3.334-2.2-1.31-.66-2.725-.913-4.08-1.353-.29-.085-.61-.068-.914-.085-.395-.017-.426.237-.243.508.426.66.654 1.37.791 2.166.122.677.762.998 1.31 1.252 1.66.727 3.425.981 5.176 1.252.487.068.944-.068 1.43-.17.412-.084.458.762.96.982.685.271 1.264.812 1.918 1.168.594.321 1.294.355 1.934.558.456.153.883.339 1.37.474a5.75 5.75 0 00-1.538-2.335zm-7.901-3.486c-.396.034-.73-.186-.974-.49-.29-.34-.594-.424-.975-.373a3.404 3.404 0 01-2.405-.643c.32-.27.64-.186.928-.135.32.05.625.152.944.203.899.203 1.751.575 2.589.964.121.068.213.17.152.322a.331.331 0 01-.259.152zm5.1 2.335s-.06-.186-.015-.22c.03-.05.152-.084.213-.05.609.355 1.279.643 1.75 1.472-.913-.085-1.385-.728-1.948-1.202zM62.088 47.858c-.471-.49-1.08-.694-1.69-.897-.76-.253-1.552-.372-2.298-.643-.777-.27-1.568-.355-2.36-.389-.274 0-.807-.17-.579.575.046.136-.06.17-.182.187-.61.101-.731.609-.685 1.15.122 1.117.289 2.2.441 3.3.076.541.259 1.049.305 1.607.06.965.837 1.337 1.416 1.81.38.322.7.78 1.263.915.091-2.538-.046-5.009-1.096-7.446.73.407 1.355.694 1.949 1.066.441.271.944.288 1.37.559.06.017.167.05.182.034.488-.745 1.37-.373 1.95-.863.41-.322.304-.677.014-.965zm-6.333 3.604c-.35-.727-.67-1.472-.594-2.369.411.711.853 1.422.594 2.37zm.274-5.008c.548-.17 1.005.084 1.462.203-.503.474-.96.27-1.462-.203zm2.101.507c.624-.084.914.474 1.325.711-.518.017-1.005-.085-1.325-.71zM46.636 68.942c-1.66-1.93-3.867-2.437-6.12-2.809-.091-.017-.244-.05-.29 0-.471.626-.745.017-1.08-.203-1.31-.812-2.74-1.235-4.187-1.608-.944-.253-1.903-.338-2.862-.473-.183-.017-.457-.051-.548.169-.122.254.122.389.274.524.32.271.411.66.518 1.05.38 1.32 1.476 1.607 2.45 1.793 1.25.237 2.497.559 3.776.474.457-.05.944.135 1.37-.203.153-.102.26-.05.275.118.045.796.654.897 1.141.999.838.186 1.63.558 2.451.795.746.203 1.508.39 2.253.626.335.102.716.237.914-.237.183-.44-.122-.778-.335-1.032v.017zm-13.93-4.18c1.035-.575 3.35-.067 4.506 1.016a10.682 10.682 0 01-4.506-1.016zm12.88 4.061c-1.264-.473-2.512-.947-3.776-1.42.015-.069.046-.136.06-.204 1.371.135 2.71.338 3.792 1.455-.03.051-.046.119-.076.17z"
      ></path>
      <path
        fill="#4D6F80"
        d="M67.995 52.36c-.32-.508-.806-.762-1.279-1-1.476-.744-3.03-1.268-4.567-1.844-.091-.017-.167-.084-.243-.084-.244.017-.564-.237-.716.118-.137.322.092.559.32.728.228.186.365.44.38.812-.197-.186-.395-.39-.608-.558-.503-.423-.99-.271-1.188.389-.06.254-.091.524-.107.795-.076 1.675.122 3.317.32 4.975.046.355.32.44.487.643.488.626.96 1.235 1.508 1.929.67-1.624.593-4.89-.092-7.7.853.644 1.553 1.422 2.42 1.98.366.238.701.542 1.082.711.289.119.64.322.867-.287.198-.559.64-.982 1.234-1.066.395-.051.35-.288.182-.542zm-7.383 2.013c.091-1.1-.472-2.2.076-3.435.791 1.252.456 2.352-.076 3.435zm2.877-3.825c.73.339 1.568.525 2.07 1.422-.974-.034-1.446-.863-2.07-1.422zM79.672 56.691c.229.778.792 1.15 1.386 1.438 2.07 1.05 4.308 1.456 6.516 1.98 1.37.322 2.664.948 3.882 1.726 2.45 1.574 4.597 3.553 6.516 5.872.32.389.7.778 1.233.778.137 0 .32 0 .365-.17.03-.084-.06-.27-.137-.355-.7-.693-1.34-1.42-1.644-2.453-.137-.457-.746-.457-1.066-.846-.32-.39-.67-.71-.776-1.235-.046-.22-.168-.305-.35-.39-.868-.423-1.568-1.049-1.797-2.148-.015-.119 0-.22-.152-.254-.822-.17-1.431-.745-1.933-1.422-.503-.677-1.05-.727-1.736-.44-.868.356-1.781.373-2.68.271-1.948-.22-3.866-.643-5.739-1.337-.654-.237-1.355-.49-1.918-1.015h.03zM32.508 81.176s-.137-.068-.213-.118c-.015 0-.015-.034-.046-.102.228-.152.61.034.716-.338.03-.136-.427-1.92-.457-2.055a8.062 8.062 0 00-1.857-.196c-.67 0 .76 1.946.791 1.997.137.203.29.406.457.592a2.117 2.117 0 00-.7.338v.728c.121-.068.258-.118.395-.17-.152.153-.289.289-.395.44v2.505c.274-.677.609-1.303 1.02-1.912.167-.22.304-.474.502-.677.472-.49.426-.761-.213-1.032zm-.137-2.995a5.927 5.927 0 00-.091-.288c-.427-1.066-.381-1.083-1.386-1.489.655-.389.548-.812.152-1.353-.41-.576-.745-1.236-1.11-1.862-.168-.27-.381-.558-.686-.473-.305.101-.35.473-.335.812.03 1.049.091 2.216.67 2.978.396.524.38.474.578 1.015.115.314 1.967.847 2.208.66zm-2.649-3.824c.29.626.32.643.441 1.472-.791-.49-.593-.643-.441-1.472zM29.692 59.145c-.229-.288-.533-.186-.807-.102-.914.271-1.599.965-2.314 1.59-1.188 1.033-2.345 2.116-3.38 3.334-.198.237-.305.508-.38.779-.107.355-.153.795.456.558.29-.034.487.085.64.44.426.981.715 1.032 1.537.39 1.035-.78 1.69-1.947 2.482-2.962.73-.947 1.415-1.912 1.78-3.113.092-.322.184-.627 0-.914h-.014zm-3.167 3.012c-.335.118-.716.237-.807.727-.107.694-.578 1.1-1.02 1.523-.107.102-.259.17-.396.068-.137-.118-.045-.288.03-.423.396-.778.96-1.388 1.614-1.912.29-.237.488-.71 1.02-.542.016.356-.167.474-.441.559zM16.127 56.606c-.365-.253-.761-.033-1.005.237-.73.846-1.568 1.659-1.918 2.81-.168.558-.442.964-.716 1.42-.624 1.1-.928 2.403-1.202 3.656-.122.507.289 1.032.73 1.32.35.236.549-.187.731-.44.7-.982 1.233-2.099 1.797-3.199.258-.541-.244-.93-.335-1.455.959.186 1.005.085 1.31-.964.227-.813.471-1.625.684-2.437.076-.305.274-.694-.076-.948zm-3.517 6.82c.579-.559.411-1.59 1.066-2.183.167.964-.015 1.37-1.066 2.183z"
      ></path>
      <path
        fill="#4D6F80"
        d="M31.732 65.118c-.015-.27-.107-.508-.335-.592-.244-.119-.457-.051-.67.169-.609.677-.822 1.59-1.188 2.42-.32.744-.548 1.54-.73 2.335-.198.778-.518 1.54-.518 2.352.015.71.137.778.716.524.335-.152.64-.067.898.237.259.322.472.237.7-.068.38-.49.624-1.1.7-1.709.214-1.506.564-3.012.503-4.585-.03-.356-.061-.71-.076-1.083zm-1.492 5.025c-.092.474-.244.914-.229 1.405 0 .17-.076.372-.274.389-.137 0-.197-.135-.213-.27-.152-1.76.396-3.283 1.172-4.739.061.017.107.034.168.051-.198 1.05-.38 2.115-.624 3.164zM23.084 70.567c.746 0 .929-.356.899-.999-.061-1.049-.092-2.098-.122-3.147-.015-.22-.03-.423-.274-.457-.198-.05-.411-.034-.548.186-.686 1.185-.99 2.521-1.005 3.909 0 .406.137.761-.168 1.117-.121.135-.106.372-.106.575 0 .897.06 1.794 0 2.674-.061.795.35 1.201.837 1.59.274.22.411.017.518-.237.35-.863.41-1.793.594-2.69.197-.914.395-1.878-.625-2.521zm-.137 3.045c.183-.778-.198-1.438.015-2.182.564.676.579 1.607-.015 2.182zM68.711 67.216c-.67-.338-1.629-.237-2.131.305-.107.118-.076.22-.03.355.395 1.32.151 2.606-.214 3.875-.137.474.015.507.32.507h1.294c1.34.068 1.4-.033 1.766-1.522.243-1.016 0-3.013-1.005-3.52zm.305 1.844c-.107 0-.686-.964-.686-1.133.016-.153.107-.17.229-.187.335.102.7.17.64.711-.031.203.121.508-.183.61zM60.17 74.323c-.944-.355-1.872-.457-2.801-.017-.533.254-.548.44-.259.999.335.609.655 1.235.624 2.013-.015.44-.015.694.092.83.182.05.365.1.548.185.137.017.304.017.502.017.29-.05.777-.084 1.249-.22.76-.203 1.415-1.167 1.4-1.996-.015-.745-.64-1.54-1.355-1.81zm-1.583 2.183c-.06.118-.137.186-.244.118-.213-.169-.274-.44-.274-.71.016-.254 0-.508-.106-.711.015-.22.091-.305.274-.237.304.119.533.322.67.66.167.423-.168.61-.32.88zM62.667 74.204c.305.085.518-.067.64-.406.471-1.438.32-3.113-.64-4.264-.228-.27-.38-.372-.67 0-.609.813-1.416 1.337-2.253 1.81-.685.39-.715.492-.29 1.135.595.896 2.087 1.725 3.213 1.742v-.017zM22.597 77.183c-.091-.576-.715-1.219-1.294-1.236a5.413 5.413 0 00-2.466.474c-.853.39-1.279 1.1-1.081 2.42a6.202 6.202 0 013.12-.83c.23 0 .442.018.655.052.244-.102.503-.187.762-.254.32-.102.365-.322.304-.626zm-3.684.795c-.122.22-.35.305-.533.135-.183-.186.03-.372.107-.524.274-.576.791-.356 1.218-.423-.305.237-.594.474-.792.812zM34.655 56.285c-.7-.592-1.508-.998-2.3-1.405-.608-.321-.76-.203-.76.508v.135c-.61 1.27.274 1.71.974 2.302.792.676 1.705.964 2.618 1.235.625.17 1.112.66 1.858.761-.487-1.506-1.325-2.622-2.39-3.536zm-2.482-.71c1.172.016 3.197 1.64 3.319 2.706-.96-1.2-2.527-1.285-3.319-2.707z"
      ></path>
      <path
        fill="#4D6F80"
        d="M66.062 67.656c-.046-.288-.244-.186-.38-.085a6.222 6.222 0 01-2.223 1.32c-.198.068-.396.152-.198.542.396.71.654 1.472.654 2.368-.015.627.472 1.05.944 1.371.183.136.32.017.457-.186.685-1.015 1.142-2.115 1.142-3.57.046-.525-.274-1.134-.396-1.76zm-.426 3.367c-.26 0-.305-.355-.35-.575-.137-.592-.03-1.202-.153-1.81-.06-.305.305-.288.488-.102.334.321.517.744.502 1.269-.046.22-.092.44-.152.643-.061.237-.092.575-.335.575z"
      ></path>
    </svg>
  );
}
