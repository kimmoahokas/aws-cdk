"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
function escapeRegex(x) {
    return x.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
async function handler(event) {
    console.log('Event: %j', { ...event, ResponseURL: '...' });
    const expression = Object.entries(event.expressionAttributeValues)
        .reduce((exp, [k, v]) => exp.replace(new RegExp(escapeRegex(k), 'g'), JSON.stringify(v)), event.expression);
    console.log(`Expression: ${expression}`);
    return eval(expression);
}
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxTQUFTLFdBQVcsQ0FBQyxDQUFTO0lBQzVCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBRU0sS0FBSyxVQUFVLE9BQU8sQ0FBQyxLQUFZO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxLQUFLLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFM0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUM7U0FDL0QsTUFBTSxDQUNMLENBQUMsR0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3hGLEtBQUssQ0FBQyxVQUFVLENBQ2pCLENBQUM7SUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUV6QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBWEQsMEJBV0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uL2V2YWx1YXRlLWV4cHJlc3Npb24nO1xuXG5mdW5jdGlvbiBlc2NhcGVSZWdleCh4OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHgucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50OiBFdmVudCk6IFByb21pc2U8YW55PiB7XG4gIGNvbnNvbGUubG9nKCdFdmVudDogJWonLCB7IC4uLmV2ZW50LCBSZXNwb25zZVVSTDogJy4uLicgfSk7XG5cbiAgY29uc3QgZXhwcmVzc2lvbiA9IE9iamVjdC5lbnRyaWVzKGV2ZW50LmV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXMpXG4gICAgLnJlZHVjZShcbiAgICAgIChleHA6IHN0cmluZywgW2ssIHZdKSA9PiBleHAucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ2V4KGspLCAnZycpLCBKU09OLnN0cmluZ2lmeSh2KSksXG4gICAgICBldmVudC5leHByZXNzaW9uLFxuICAgICk7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzaW9uOiAke2V4cHJlc3Npb259YCk7XG5cbiAgcmV0dXJuIGV2YWwoZXhwcmVzc2lvbik7XG59XG4iXX0=